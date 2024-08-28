import React from 'react'

const RenderizandoComFuncoes = () => {
    function escolhaDeRenderizacao(oQueRenderizar){
        if(oQueRenderizar === "h1"){
            return <h1>texto em h1</h1>
        } else {
            return <h2>texto em h2</h2>
        }       
    }
    return (
    <div>
        {escolhaDeRenderizacao('teste')}
        {escolhaDeRenderizacao('h1')}
    </div>
    )
}

export default RenderizandoComFuncoes