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
class NetworkingManager: NSObject {
   
  @objc func getOnlineData(_ callback: @escaping RCTResponseSenderBlock){

    guard let url = URL(string: "http://data.fixer.io/api/latest") else {
       return
     }
    
    Alamofire.request(url,
                      method: .get,
                      parameters: ["access_key": "bd403a15fd9a00f7145648cfd77e0be3",
                                   "symbols":"USD, JPY, GBP, AUD, CAD, CHF, CNY, SEK, NZD"])
    .validate()
    .responseJSON { response in
      guard response.result.isSuccess else {
        return
      }
      guard let value = response.result.value as? [String: Any] else {
             print("Malformed data received from fetchAllRooms service")
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
