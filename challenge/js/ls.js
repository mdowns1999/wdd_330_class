/* ***********************************
FUNCTION: CONVERT TO JSON:
convert objects into json
****************************************/
function convertToJson(object){
    let jsonObject = JSON.stringify(object)
    return jsonObject
}

/* ***********************************
FUNCTION: GET STORAGE:
Get Items from local storage
****************************************/
function getStorage()
{
    let JSONobject = localStorage.getItem("Item");
    return JSON.parse(JSONobject)
}

/* ***********************************
FUNCTION: SET STORAGE:
Set Items to local storage
****************************************/
function setStorage(list)
{
    let jsonObject = convertToJson(list)
    console.log(jsonObject)
    localStorage.setItem("Item", jsonObject);
}

/* ***********************************
FUNCTION: CREATE OBJECT:
MAKE AN OBJECT OUT OF EACH ITEM
****************************************/
function createObject(content, list){
    let toDo = { ID : new Date(), content: content, completed: false }
    list.push(toDo)
    setStorage(list)
}

// export
// {
//    createObject, setStorage, getStorage
// }
