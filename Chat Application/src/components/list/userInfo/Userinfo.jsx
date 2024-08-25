import { useUserStore } from "../../../lib/userStore"
import "./userInfo.css"

const Userinfo = () => {

    const {currentUser} = useUserStore()


    return(
        <div className='userInfo'>
            <div className="user">
                <img src="./user.jpg" alt="" />
                <h2>{currentUser.username}</h2>
            </div>
            <div className="icons">
                <img src="./more.png" alt="" />
                <img src="./video.png" alt="" />
                <img src="./edit.png" alt="" />
            </div>
        </div>
    )
}

export default Userinfo