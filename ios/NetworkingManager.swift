//
//  NetworkingManager.swift
//  SweeprTest
//
//  Created by 李祺 on 12/02/2020.
//  Copyright © 2020 Facebook. All rights reserved.
//

import Foundation
import Alamofire

@objc(NetworkingManager)
class CurrencyNetworkingManager: NSObject {
  var urlStr = ""
  var keyStr = ""
  var symbols = ""
  
  
  @objc(setNetworkConfig:::)
  func setCurrencyConfig(urlString:String,keyString:String, symbolString:String){
    urlStr = urlString
    keyStr = keyString
    symbols = symbolString
  }
   
  @objc func getCurrency(_ callback: @escaping RCTResponseSenderBlock){
    
    guard let url = URL(string:urlStr) else {
       return
     }
    
    Alamofire.request(url,
                      method: .get,
                      parameters: ["access_key": keyStr,
                      "symbols":symbols])
    .validate()
    .responseJSON { response in
   
      guard response.result.isSuccess, let value = response.result.value as? [String: Any] else {
        print("Error while fetching info: \(String(describing: response.result.error?.localizedDescription))")
            var errorRes = Dictionary<String, Any>()
            errorRes["success"] = false
            if let errorDes = response.result.error?.localizedDescription{
              errorRes["error"] = String(errorDes)
            }else{
              errorRes["error"] = "unknown error"
             }
            callback([errorRes])
            return
         }
      print(value)
      callback([value])
  }
  }
  
  @objc static func requiresMainQueueSetup() -> Bool {
      return true
    }
  
}
