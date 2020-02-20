//
//  NetworkBridge.m
//  SweeprTest
//
//  Created by 李祺 on 13/02/2020.
//  Copyright © 2020 Facebook. All rights reserved.
//

#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(CurrencyNetworkingManager, NSObject)
   RCT_EXTERN_METHOD(setCurrencyConfig:(NSString *)urlString:(NSString *)keyString:(NSString *)symbolString)
   RCT_EXTERN_METHOD(getCurrency:(RCTResponseSenderBlock)callback)
@end

