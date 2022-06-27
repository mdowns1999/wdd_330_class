export default class Storage {
    'use strict'
    // convert objects into json
    convertToJson(object)
    {
    let jsonObject = JSON.stringify(object)
    return jsonObject
    }

    // // MAKE AN OBJECT OUT OF EACH ITEM
    // createObject(url)
    // {
    // let toDo = { Link: url }
    // list.push(toDo)
    // this.setStorage(list)
    // }

    // Get Items from local storage
    getStorage()
    {
    let JSONobject = localStorage.getItem("Item");
    return JSON.parse(JSONobject)
    }

    // Set Items to local storage
    setStorage(list)
    {
    let jsonObject = this.convertToJson(list)
    //console.log(jsonObject)
    localStorage.setItem("Item", jsonObject);
    }


}