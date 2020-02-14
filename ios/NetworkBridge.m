//
//  NetworkBridge.m
//  SweeprTest
//
//  Created by 李祺 on 13/02/2020.
//  Copyright © 2020 Facebook. All rights reserved.
//

#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(NetworkingManager, NSObject)
   RCT_EXTERN_METHOD(getOnlineData:(RCTResponseSenderBlock)callback)
@end

