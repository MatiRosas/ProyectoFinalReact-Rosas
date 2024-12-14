
import { subirProductosFake } from '../../../asyncMock'

function ProductUpload() {
    subirProductosFake()
    return (
    <div>
        Subiendo Productos
    </div>
    )
}

export default ProductUpload
