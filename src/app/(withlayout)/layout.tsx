"use client"
import Contents from "@/components/ui/Content";
import Sidebar from "@/components/ui/Sidebar";
import Header from "@/components/ui/authHeader/Header";
import { userLogin } from "@/service/auth.service";
import { Layout } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Dashboard = ({ children }: { children: React.ReactNode }) => {
    const isLogin = userLogin()
    const router = useRouter()
    const [loading, setLoading] = useState<boolean>(false)
    useEffect(() => {
        setLoading(true)
        if (!isLogin) {
            router.push('/login')
        }
    }, [isLogin, router])
    if (!loading) {
        return 'Loading...'
    }
    return (
        <Layout hasSider>
            <Sidebar />
            <Contents>
                {children}
            </Contents>
        </Layout>

    );
};

export default Dashboard;