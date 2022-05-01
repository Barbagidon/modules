  onToggleIncrease = (id) => {
  
  first method

        // this.setState(({ data }) => {
        //     const index = data.findIndex(item => item.id === id)
        //     const old = data[index]
        //     const newItem = { ...old, increase: !old.increase }
        //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

        //     return {
        //         data: newArr
        //     }



        // })
        
        
        second method

        this.setState(({ data }) => ({
            data: data.map(item=>{
                if(item.id === id){
                    return {...item, increase:!item.increase}
                }else{
                    return item;
                }
                
            })

        }))

    }
