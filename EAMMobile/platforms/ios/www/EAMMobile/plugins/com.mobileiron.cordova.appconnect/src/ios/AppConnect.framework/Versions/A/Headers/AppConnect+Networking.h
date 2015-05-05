//
//  AppConnect+Networking.h
//  AppConnect networking functions
//
//  Copyright (c) 2014 MobileIron. All rights reserved.
//
//  YOUR USE AND DISTRIBUTION OF THIS SOFTWARE IS SUBJECT TO THE SOFTWARE DEVELOPMENT KIT (SDK) AGREEMENT BETWEEN
//  YOU AND MOBILE IRON, INC. (“MI”).  USE OR DISTRIBUTION NOT IN STRICT ACCORDANCE WITH THE AGREEMENT IS PROHIBITED.
//

#import "AppConnect.h"


// AppConnectNetworkingDelegate protocol defines a protocol for an optional delegate that allows the AppConnect SDK to
// notify the app of networking events when using the AppTunnel feature.
//
// If your app implements the NSURLConnectionDataDelegate method
// connection:didSendBodyData:totalBytesWritten:totalBytesExpectedToWrite: implement this delegate.
//
// Use the setNetworkingDelegate: method to set the delegate that will receive these notifications.
@protocol AppConnectNetworkingDelegate <NSObject>

// Notification of progress as the body of a request is sent when a connection is tunneled using the AppTunnel feature.
//
// When a connection is tunneled, iOS will not call the NSURLConnectionDataDelegate method
// connection:didSendBodyData:totalBytesWritten:totalBytesExpectedToWrite: to notify the app of upload progress.
// Instead, AppConnect will call this method on the networking delegate. If your app implements the
// connection:didSendBodyData:totalBytesWritten:totalBytesExpectedToWrite: method, implement this method
// for upload updates.
//
// The request argument is the NSURLRequest that started the upload. The remaining arguments match the equivalent
// NSURLConnectionDataDelegate method.
-(void) uploadProgressForConnectionWithURLRequest:(NSURLRequest *)request
                                     bytesWritten:(NSInteger)bytesWritten
                                totalBytesWritten:(NSInteger)totalBytesWritten
                        totalBytesExpectedToWrite:(NSInteger)totalBytesExpectedToWrite;
@end

// Additional methods on the AppConnect object for networking
@interface AppConnect (Networking)

// Sets the optional networking delegate, which will receive the notifications described in the
// AppConnectNetworkingDelegate protocol.
-(void) setNetworkingDelegate:(id<AppConnectNetworkingDelegate>)delegate;
@end