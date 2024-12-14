export default function ComponentWithRenderProps({render}){
    const data = 'This is a component rendered with props :)'
    return(render(data))

}

