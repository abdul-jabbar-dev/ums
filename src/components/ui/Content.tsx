'use client'
import { Layout } from "antd";
import MyBreadcrumb from "../utils/Breadcrumb/MyBreadcrumb";
import Header from "./authHeader/Header";
const { Content } = Layout
export default function Contents({ children }: { children: React.ReactNode }) {
    return (
        <Content style={{ minHeight: '100vh' }}>
            <Header />
            <MyBreadcrumb item={[{ title: 'Home', href: '/' }, { title: 'student', href: "/student" }]} />
            <div style={{padding:"10px"}}> {children}</div>
        </Content>
    )
}
