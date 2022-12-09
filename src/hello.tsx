import React from 'react'
import {Table, ConfigProvider, Card} from 'antd';

type User = {
  username: string;
}

export default function Hello() {
  const users: (User & { key: string })[] = [
    {key: 'Aaa', username: 'Aaa'},
    {key: 'Bbb', username: 'Bbb'},
  ]
  return <>
    <Card title={'Default hashed styles'}>
      <Table<User> columns={[
        {title: "Name", render: (_, v) => v.username}
      ]} dataSource={users} pagination={false}/>
    </Card>

    <ConfigProvider theme={{hashed: false}}>
      <Card title={'Configured no-hash styles'}>
        <Table<User> columns={[
          {title: "Name", render: (_, v) => v.username}
        ]} dataSource={users} pagination={false}/>
      </Card>
    </ConfigProvider>

  </>
};
