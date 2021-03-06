import React, { Fragment, useState } from 'react';

import { RouteComponentProps } from 'react-router';

import ContentWrapper from '../../templates/ContentWrapper';
import TextFieldWrapper from '../../molecules/TextFieldWrapper';
import TextLink from '../../atoms/TextLink';
import Btn from '../../atoms/Btn';
import './Signin.scss';
import { isUsernameAvailable } from '../../../common';
import { getMessageFromMeilingV1Error, parseMeilingV1ErrorResponse } from '../../../common/error';

interface Props extends RouteComponentProps {

};

const SignIn: React.FC<Props> = ({ history, location }) => {
  type textFieldStatusTypes = "normal" | "positive" | "warning" | "negative";
  interface textFieldStatuses { 
    userId: {
      status: textFieldStatusTypes;
      message: string;
    };
  };


  const [username, setUsername] = useState("");
  const [textFieldStatus, setTextFieldStatus] = useState<textFieldStatuses>({
    userId: {
      status: "normal",
      message: "",
    }
  });

  const checkUserId: () => Promise<void> = async () => {
    let query;
    try {
      query = await isUsernameAvailable(username);
    } catch(e) {
      if (e.response) {
        const result = parseMeilingV1ErrorResponse(e);
        setTextFieldStatus({
          userId: {
            status: 'negative',
            message: getMessageFromMeilingV1Error(result),
          }
        });
      } else {
        setTextFieldStatus({
          userId: {
            status: 'negative',
            message: 'Meiling API 서버와의 통신에 실패 했습니다.',
          }
        });
      }
      
      return;
    }
    
    if (query.success) {
      let state;

      if (query.data) {
        state = {
          name: query.data.name,
          username: username,
          profileUrl: query.data.profileUrl === "" ? undefined : query.data.profileUrl,
        }
      } else {
        state = {
          username: username,
        }
      }

      history.push({
        pathname: "/password",
        search: location.search,
        state,
      });
    } else {
      setTextFieldStatus({
        userId: {
          status: 'negative',
          message: '사용자 이름이 존재하지 않습니다.',
        }
      });
    }
  }

  return (
    <Fragment>
      <ContentWrapper
        pageName="signin"
        progressValue={1 / 3 * 100}
        content={
          <>
            <TextFieldWrapper
              type="text"
              status={textFieldStatus.userId.status}
              onChange={(e) => {
                setUsername(e.target.value);
                setTextFieldStatus({
                  userId: {
                    status: 'normal',
                    message: ''
                  }
                });
              }}
              onEnter={() => {
                checkUserId();
              }}
              placeholder="아이디 또는 이메일을 입력하세요."
              caption={textFieldStatus.userId.message}
              autoComplete="username email"
            />
            <TextLink to="signup">계정이 없으신가요?</TextLink>
          </>
        }
        buttonsBottom={[
          <Btn key="button_socialsignin" styleType="secondary" to={`socialsignin${location.search}`}>소셜 계정으로 로그인</Btn>,
          <Btn key="button_next" onClick={checkUserId}>다음</Btn>
        ]}
      />
    </Fragment>
  );
}

export default SignIn;
