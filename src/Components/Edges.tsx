import {
  useEdgesState,
  addEdge,
  Edge,
  Connection,
  OnSelectionChangeFunc,
} from "@xyflow/react";
import { useCallback, useState } from "react";
const useEdges = () => {
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
  const [selectedEdges, setSelectedEdges] = useState<string[]>([]);
  const [lineSelectionMode, setLineSelectionMode] = useState(false);

  const onConnect = useCallback(
    (edge: Edge | Connection) => {
      if (lineSelectionMode) {
        const newEdges = addEdge(edge, edges);
        setEdges(newEdges);
        setLineSelectionMode(false);
      }
    },
    [edges, lineSelectionMode]
  );

  const onEdgesDelete = useCallback(
    (edgesToDelete: Edge[]) =>
      setEdges((eds) =>
        eds.filter((edge) => !edgesToDelete.find((e) => e.id === edge.id))
      ),
    [setEdges]
  );

  const onSelectionChange: OnSelectionChangeFunc = useCallback(({ edges }) => {
    setSelectedEdges(edges.map((edge) => edge.id));
  }, []);

  const deleteSelectedEdges = () => {
    setEdges((eds) => eds.filter((edge) => !selectedEdges.includes(edge.id)));
    setSelectedEdges([]);
  };

  const handleSelectLines = useCallback(() => {
    setLineSelectionMode(true);
  }, []);

  return {
    edges,
    onEdgesChange,
    onConnect,
    onEdgesDelete,
    onSelectionChange,
    deleteSelectedEdges,
    handleSelectLines,
  };
};

export default useEdges;
