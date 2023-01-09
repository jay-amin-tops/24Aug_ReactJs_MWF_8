
import httpanything from "./../http-common.jsx";

const getAll = () =>{
    return httpanything.get("http://localhost/api/allusers")
}
const getLoginUsersData = (username,password) =>{
    // console.log("inside getLoginUsersData : ", username,"inside getLoginUsersData : ", password);
    return httpanything.post("http://localhost/api/login",{
        username: username,
        password: password
      })
}

const UserService = {
    getAll,
    getLoginUsersData
}
// export getAll;
export default UserService;