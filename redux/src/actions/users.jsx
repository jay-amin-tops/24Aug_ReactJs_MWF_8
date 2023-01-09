import UserService from "./../services/UserService.jsx"
// import UserService,{getAll} from "./../services/UserService.jsx"

export const retriveUsers = () =>async(dispatch)=>{
    console.log("called retierveUsers");
    try {
        const ResData = await UserService.getAll();
        return dispatch({type:"RETRIVE_ALL_USERS",payload:ResData})
    } catch (error) {
        console.log(error);   
        return error
    }
}
export const retriveLoginUsers = (uname,pass) =>async(dispatch)=>{
    console.log("called retierveUsers username",uname,"password",pass);
    try {
        const ResData = await UserService.getLoginUsersData(uname,pass);
        return dispatch({type:"RETRIVE_LOGIN_USERS",payload:ResData})
    } catch (error) {
        console.log(error);   
        return error
    }
}