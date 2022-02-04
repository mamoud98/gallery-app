import React from "react";

import { useForm, Controller } from "react-hook-form";
import { Form, Input, Button, Col } from "antd";

const Search = (props) => {
  const { handleSubmit, watch, control } = useForm();
  const onSubmit = (data) => {
    props.imageBySearch(data.img);
  };
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
    

  };
  

  return (
    <Col span={8} offset={8}>
        <Form  onSubmitCapture={handleSubmit(onSubmit)}>
      <Form.Item>
        <Controller
          name="img"
          control={control}
          render={({ field }) => <Input {...field} />}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
      </Col>
    
  );
};

export default Search;
