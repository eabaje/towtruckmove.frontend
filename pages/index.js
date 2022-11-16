import { React, useState, useContext } from "react";
import Head from "next/head";
import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { GlobalContext } from "../context/Provider";
import { signin2 } from "../context/actions/auth/auth.action";
import Layout from "../components/layout/Layout";
import Intro from "../components/main/intro";
import styles from "../styles/Home.module.css";

function Index() {
  const [showForm, setShowForm] = useState(0);

  const router = useRouter();
  // const { login } = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    control,
  } = useForm();
  // const {
  //   authDispatch,
  //   authState: { isLoggedIn, loading },
  // } = useContext(GlobalContext);

  // const [isAuthenticated, setIsAuthenticated] = React.useState(isLoggedIn);

  const onSubmit = async (formdata) => {
    signin2(formdata)(authDispatch)((res) => {
      // res.user.isConfirmed === true
      //   ? res.user.isActivated === true
      //     ? router.push(`/dashboard/`)
      //     : res.user.roles === "carrier"
      //     ? (window.location.href = `/carrier/`)
      //     : res.user.roles === "shipper"
      //     ? (window.location.href = `/shipment/`)
      //     : (window.location.href = `/user/user-profile/?userId=${res.user.UserId}&companyId=${res.user.CompanyId}`)
      //   : (window.location.href = `/user/user-profile/?userId=${res.user.UserId}&companyId=${res.user.CompanyId}`);

      window.location.href = "/home/";
      // history.push("/dashboard");
    })((err) => {
      console.log(`err`, err);
      toast.error(err);
    });
  };
  // console.log(`formdata`, formdata);

  return (
    <>
      <Layout>
        <Intro />
      </Layout>
    </>
  );
}
export default dynamic(() => Promise.resolve(Index), { ssr: false });
