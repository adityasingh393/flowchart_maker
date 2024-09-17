import {
  useEdgesState,
  addEdge,
  Edge,
  Connection,
  OnSelectionChangeFunc,
  MarkerType,
} from "@xyflow/react";
import { useCallback, useState } from "react";

const useEdges = () => {
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
  const [selectedEdges, setSelectedEdges] = useState<string[]>([]);
  const [selectedEdgeType, setSelectedEdgeType] = useState<
    "default" | "straight" | "step" | "smoothstep"
  >("default");

  const onConnect = useCallback(
    (edge: Edge | Connection) => {
      const newEdge = {
        ...edge,
        type: selectedEdgeType,
        markerStart: {
          type: MarkerType.ArrowClosed,
          width: 13,
          height: 13,
          color: "#008CBA",
        },
        style: {
          strokeWidth: 3,
          stroke: "#008CBA",
          position: "absolute",
        },
      };
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
    setEdges,
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
