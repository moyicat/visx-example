export interface Margin {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

export interface Theme {
  fontFamily?: string;
  fontSize?: number;
  axisLabelColor?: string;
  axisColor?: string;
  gridColor?: string;
  missingDataColor?: string;
  otherDataColor?: string;
  annotationColor?: string;
}

export const defaultTheme: Theme = {
  fontSize: 12,
  fontFamily: "SF Mono",
  axisLabelColor: "#6c757d",
  axisColor: "#6c757d",
  gridColor: "#DEE2E6",
  missingDataColor: "#E9ECEF",
  otherDataColor: "#ADB5BD",
  annotationColor: "#212529"
};
