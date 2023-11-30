import styled from "styled-components";

const TopMenu = styled.header`
    display: flex;
    justify-content: right;
    align-items: center;
    color: black;
    background-color: #F5F5F5;
    font-size: 15px;
    
    width: 100%; 
    height: 50px;

    .BasicMenu {
        list-style: none;

        ul {
            margin: 0;
            padding: 0;
            display: flex;
            list-style: none;

            li {
                margin-right: 20px; 
                cursor: pointer;
            }
        }
    }
`;

const Header = () => {
    return (
        <TopMenu>
            <div className="BasicMenu">
                <ul className="Nav_1">
                    <li>매장찾기</li>
                    <li>고객센터</li>
                    <li>가입하기</li>
                    <li>로그인</li>
                </ul>
            </div>
        </TopMenu>
    );
};

export default Header;