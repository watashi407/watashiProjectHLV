const card = (data) =>{

    const list = document.createElement('ul');
    const dataValue = document.createElement('p');
    dataValue.innerText = `${data.name}`;
    list.appendChild(dataValue);

    document.getElementById("root").appendChild(list)
}



export {card}