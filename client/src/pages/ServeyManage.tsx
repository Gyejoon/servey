import React from 'react';
import styled from 'styled-components';
import { Input, Card, Select } from 'antd';
const { Option } = Select;

const ServeyManageBlock = styled.div`
  width: 800px;
  margin: auto;

  .question-container {
    padding-top: 20px;
    .question-header {
      display: flex;
      justify-content: center;
    }
  }
`;

interface ServeyManageProps {}

const ServeyManage: React.SFC<ServeyManageProps> = props => {
  return (
    <ServeyManageBlock>
      <h2>설문지 제목 </h2>
      <Input placeholder="설문지 제목을 입력해 주세요." />

      <div className="question-container">
        <h2>질문</h2>
        <Card>
          <div className="question-header">
            <Input
              className="question-title"
              placeholder="질문 제목을 입력해 주세요."
            />
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="답변 형태 선택"
              optionFilterProp="children"
            >
              <Option value="YN">YES/NO</Option>
              <Option value="SINGLE">한 개 선택</Option>
              <Option value="MULTIPLE">여러개 선택</Option>
            </Select>
          </div>

          <div className="question-items"></div>
        </Card>
      </div>
    </ServeyManageBlock>
  );
};

export default ServeyManage;
