import React, { useState } from "react";
import { useRouter } from "next/router";
import { authState } from "@/atoms/auth";
import { useRecoilState } from "recoil";
export interface NavBarProps {
  children: React.ReactNode;
}

const Navbar = ({ children }: NavBarProps) => {
  const [activeTab, setActiveTab] = useState("");
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(authState);

  const router = useRouter();

  const selectTabItem = (item: any) => {
    if (item === "홍보글") {
      setActiveTab("홍보글");
      router.push("/promotion");
    } else if (item === "지원") {
      setActiveTab("지원");
      router.push("/support");
    } else if (item === "모집") {
      setActiveTab("모집");
      router.push("/recruit");
    }
  };

  const SpaceHome = () => {
    setActiveTab("");
    router.push("/");
  };

  const SpaceMypage = () => {
    setIsDropdownOpened(!isDropdownOpened);
  };

  const onLogin = (text: any) => {
    setIsLoggedIn(!isLoggedIn);
  };

  const onLogout = (text: any) => {
    setIsLoggedIn(!isLoggedIn);
    setIsDropdownOpened(!isDropdownOpened);
  };

  return (
    <div>
      <div>
        <div className="navbar">
          <div className="left" onClick={SpaceHome}>
            매니저브
          </div>
          <div className="center">
            <li
              className={activeTab === "홍보글" ? "selected" : ""}
              onClick={() => selectTabItem("홍보글")}
            >
              <p>홍보글 둘러보기</p>
            </li>
            <li
              className={activeTab === "지원" ? "selected" : ""}
              onClick={() => selectTabItem("지원")}
            >
              <p>조직 지원 관리</p>
            </li>
            <li
              className={activeTab === "모집" ? "selected" : ""}
              onClick={() => selectTabItem("모집")}
            >
              <p>조직 모집 관리</p>
            </li>
          </div>
          <div className="right">
            {!isLoggedIn ? (
              <div className="login" onClick={onLogin}>
                <div className="text">로그인</div>
              </div>
            ) : (
              <div style={{ display: "flex", width: "100px" }}>
                <img
                  width={20}
                  src="https://cdn-icons-png.flaticon.com/512/14/14660.png"
                />
                <div className="name" onClick={SpaceMypage}>
                  배현서
                </div>
                {isDropdownOpened ? (
                  <div>
                    <div className="drop-triangle"></div>
                    <div className="drop">
                      <div className="drop-container">
                        <div
                          className="text"
                          style={{ textAlign: "center", lineHeight: "28px" }}
                        >
                          현서님, 좋은 조직 찾으시길 바랄게요 ^^{" "}
                        </div>
                        <div className="control">
                          <div style={{ marginBottom: "10px" }}>설정</div>
                          <div onClick={onLogout}>로그아웃</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            )}
          </div>
        </div>
        {children}
      </div>

      <style jsx>{`
        .navbar {
          width: 100%;
          background-color: white;
          height: 55px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(251, 251, 255, 0.3);
          box-shadow: 0px 0px 4px rgba(177, 177, 177, 0.25);
        }
        .left {
          margin-left: 20px;
          font-size: 18px;
          line-height: 20px;
          color: #5c59f0;
          cursor: pointer;
        }

        .center {
          display: flex;
          list-style: none;
          width: 394px;
          justify-content: space-between;
        }
        .center li {
          height: 55px;
          display: flex;
          align-items: center;
          font-size: 14px;
          cursor: pointer;
          color: #656565;
        }
        .center li:hover {
          color: red;
        }
        .center .selected {
          border-bottom: 1px solid #6c6c6c;
        }
        .center li p {
          margin-left: 7px;
          margin-right: 7px;
        }
        .right {
          display: flex;
          margin-right: 30px;
          cursor: pointer;
          z-index: 1;
        }
        .right .login {
          width: 100px;
          height: 30px;

          background: #44cecd;
          border-radius: 20px;
        }
        .login .text {
          color: white;
          text-align: center;
          margin-top: 9px;
          font-size: 12px;
          font-weight: 700;
        }
        .right .name {
          margin-left: 8px;
          color: #656565;
        }
        .right .drop-triangle {
          position: absolute;
          z-index: 2;
          border-bottom: 20px solid lightgray;
          border-left: 20px solid transparent;
          border-right: 20px solid transparent;
          margin-right: 60px;
          right: 0;
          margin-top: 25px;
          border-radius: 10px;
        }
        .right .drop {
          position: absolute;
          z-index: 3;
          width: 177px;
          height: 232px;
          background-color: lightgray;
          margin-top: 35px;
          margin-right: 30px;
          right: 0;
          border-radius: 10px;
          display: flex;
        }
        .drop-container {
          width: 134px;
          height: 165px;
          margin: auto;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .drop-container .control div {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
