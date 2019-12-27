import React from 'react';
import styled from 'styled-components';
import { Table } from 'antd';

const ServeyListBlock = styled.div``;

interface ServerListProps {}

const columns = [
  {
    title: '설문지 제목',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: '질문 갯수',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '설문지 수정',
    key: 'id',
    render: (id: string) => <a>수정하기</a>,
  },
  {
    title: '리포트',
    key: 'id',
    render: (id: string) => <a>리포트</a>,
  },
  {
    title: '로그',
    key: 'id',
    render: (id: string) => <a>참여자 로그</a>,
  },
  {
    title: '설문지배포',
    key: 'id',
    render: (id: string) => <a>배포 주소</a>,
  },
];

const data = [
  {
    key: '1',
    id: 'abc',
    title: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    id: 'abc',
    title: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    id: 'abc',
    title: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const ServeyList: React.SFC<ServerListProps> = props => {
  return (
    <ServeyListBlock>
      <Table columns={columns} dataSource={data}></Table>
    </ServeyListBlock>
  );
};

export default ServeyList;
