import React from "react";
import getConfig from 'next/config'

const MyPage = ({my_env}) => <div> { my_env } </div>

export const getServerSideProps = async () => {
  const { publicRuntimeConfig } = getConfig()
  return { props: { my_env: publicRuntimeConfig.MY_ENV } }
}

export default MyPage