import PaystackWebView from 'react-native-paystack-webView'
import React, { Component } from 'react'
import { View } from 'react'

class Myapp extends Component {
  render () {
    return (
      <View>
        <PaystackWebView
          buttonText='Pay Now'
          paystackKey='<your-key-here>'
          amount={120000}
          billingEmail='ayoshokz@gmail.com'
          billingMobile='08101274387'
          billingName='Oluwatobi Shokunbi'
          ActivityIndicatorColor='green'
          onSuccess={(tranRef)=>{console.log(tranRef)}}
          onCancel={()=>{console.log('something went wrong')}}
         />
      </View>
    );
  }
}
export default Myapp;

