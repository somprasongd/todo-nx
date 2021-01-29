import React from 'react';
import { Button, DatePicker } from 'antd';

export function Index() {
  return (
    <>
      <Button type="primary">PRESS ME</Button>
      <DatePicker placeholder="select date" />
    </>
  );
}

export default Index;
