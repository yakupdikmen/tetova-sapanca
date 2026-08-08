"use client";

import React from "react";
import InteractiveVirtualTour, {
  InteractiveVirtualTourProps,
} from "@/components/ui/InteractiveVirtualTour";

export type VirtualTourModalProps = InteractiveVirtualTourProps;

export const VirtualTourModal: React.FC<VirtualTourModalProps> = (props) => {
  return <InteractiveVirtualTour {...props} />;
};

export default VirtualTourModal;
