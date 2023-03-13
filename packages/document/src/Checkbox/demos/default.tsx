/**
 * @title Checkbox 多选框
 * @description 默认多选框
 * @order 1
 */

import React from 'react';
import { Checkbox } from 'wind-design';
import 'wind-design/dist/style.css';

const onChange = (e: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/restrict-template-expressions
  console.log(`${e.target}`)
}

const Default = () => {
  return (
    <div>
      <Checkbox onChange={() => onChange}>
        🍓草莓
      </Checkbox>
      <Checkbox disabled onChange={() => onChange}>
        🍎苹果
      </Checkbox>
      <Checkbox onChange={() => onChange}>
        🍇葡萄
      </Checkbox>
      <Checkbox onChange={() => onChange}>
        🍐梨子
      </Checkbox>
      <Checkbox onChange={() => onChange}>
        🍌香蕉
      </Checkbox>
    </div>
  );
};

export default Default;
