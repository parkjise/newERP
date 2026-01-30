import React from "react";
import { MainStyles } from "@/app/layouts/Main/Main.styles";
type Props = {
    className?: string;
}
const Main = ({ className }: Props) => {
    return (
        <MainStyles className={className}>
            <h1>Main</h1>
        </MainStyles>
    );
};

export default Main;