import styles from "./card.module.scss";
import { Card as AntdCard, CardProps as AntdCardProps } from "antd";

import { Combine } from "@/utils";

export declare type CardProps = Combine<
  {
    shadow?: boolean;
  },
  AntdCardProps
>;

export function Card(props: CardProps) {
  const { shadow = false, ...restProps } = props;

  return <AntdCard className={shadow ? styles.shadow : ""} {...restProps} />;
}
