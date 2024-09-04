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
  const [selectedEdgeType, setSelectedEdgeType] = useState<"default" | "straight" | "step" | "smoothstep">("default");

  const onConnect = useCallback(
    (edge: Edge | Connection) => {
      const newEdge = { ...edge, type: selectedEdgeType };
      setEdges((eds) => addEdge(newEdge, eds));
    },
    [edges, selectedEdgeType]
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

  const handleEdgeTypeChange = useCallback(
    (type: "default" | "straight" | "step" | "smoothstep") => {
      setSelectedEdgeType(type);
    },
    []
  );

  return {
    edges,
    onEdgesChange,
    onConnect,
    onEdgesDelete,
    onSelectionChange,
    deleteSelectedEdges,
    selectedEdgeType,
    handleEdgeTypeChange,
  };
};

export default useEdges;
