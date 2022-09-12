import { useSelector, useDispatch } from "react-redux";
import { log_out, login_sucess } from "../redux/reducers/AuthReducer";
import axios from "./axios";

export default function CheckToken() {
  const dispatch = useDispatch();
  const authData = useSelector((state: any) => state.Auth);

  if (authData.accessToken) {
    //토큰정보가 있다면 만료시간 확인
    const currentTime = new Date().getTime() / 1000;
    console.log(1);
    if (authData.expiredTime > currentTime + 1000000000000000) {
      console.log(2);
      return false;
    }
    console.log(3);
    axios({
      method: "post",
      url: `auth/reissue`,
      data: {
        accessToken: authData.accessToken,
        refreshToken: authData.refreshToken,
      },
    })
      .then(function (response) {
        console.log(4);
        dispatch(login_sucess(response.data));
        console.log("토큰 갱신 처리 완료");
        return false;
      })
      .catch(function (error) {
        console.log(5);
        console.error("refresh토큰 만료");
      });

    console.log(6);
    dispatch(log_out());
    return true;
  }

  return true;
}
