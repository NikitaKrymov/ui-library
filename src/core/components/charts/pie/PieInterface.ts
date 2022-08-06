export interface PieProps {
    children?: React.ReactNode
}

export interface PieCanvasProps {
    children: any,
    canvas: any
}

export const classes = {
    chart: "nk__chart__pie",
    pieCanvas: "nk__pie__canvas",
    layer: "nk__chart__pie__layer",
    sector: "nk__chart__pie__sector",
    legend: "nk__chart__pie__legend",
    container: "nk__chart__container",
}