//
//  AppConnectUIApplication.h
//  UIApplication subclass used by AppConnect SDK.
//
//  Copyright (c) 2015 MobileIron. All rights reserved.
//
//  YOUR USE AND DISTRIBUTION OF THIS SOFTWARE IS SUBJECT TO THE SOFTWARE DEVELOPMENT KIT (SDK) AGREEMENT BETWEEN
//  YOU AND MOBILE IRON, INC. (“MI”).  USE OR DISTRIBUTION NOT IN STRICT ACCORDANCE WITH THE AGREEMENT IS PROHIBITED.
//

#import <UIKit/UIKit.h>

// UIApplication subclass used by AppConnect SDK. Client applications passing thier own subclass of UIApplication as
// prinicpal class to UIApplicationMain() function should derive their subclass from AppConnectUIApplication instead
// of UIApplication to be able to use AppConnect features.
//
// In case client applications do not subclass UIApplication, they should instead pass "AppConnectUIApplication" as
// the principal class name to UIApplicationMain() function.

@interface AppConnectUIApplication : UIApplication

// [UIApplication sharedApplication].delegate returns the proxied UIApplicationDelegate object. Use this getter to
// retrieve the original UIApplicationDelegate object instead.
//
// NOTE: Most apps have no reason to use this getter.
@property(nonatomic, readonly) id<UIApplicationDelegate> originalDelegate;

@end
