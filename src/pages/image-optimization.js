import React from "react"

import ImageOptimization from "../components/image-optimization"

const ImageOptimizationPage = () => (
    <div
        style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
        }}>
        <div style={{maxWidth: `800px`, marginBottom: `1.45rem`}}>
            <ImageOptimization/>
        </div>
    </div>
)

export default ImageOptimizationPage



