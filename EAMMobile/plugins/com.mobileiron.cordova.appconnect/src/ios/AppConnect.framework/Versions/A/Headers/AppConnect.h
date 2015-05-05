//
//  AppConnect.h
//  Central class of AppConnect
//
//  Copyright (c) 2013 MobileIron. All rights reserved.
//
//  YOUR USE AND DISTRIBUTION OF THIS SOFTWARE IS SUBJECT TO THE SOFTWARE DEVELOPMENT KIT (SDK) AGREEMENT BETWEEN
//  YOU AND MOBILE IRON, INC. (“MI”).  USE OR DISTRIBUTION NOT IN STRICT ACCORDANCE WITH THE AGREEMENT IS PROHIBITED.
//

#import <Foundation/Foundation.h>

// Forward declaration of the delegate protocol
@protocol AppConnectDelegate;

#define kACUIApplicationClassName @"AppConnectUIApplication"

// An enum listing the states of policies. When an application receives notification that a policy has changed, it
// must call the corresponding acknowledgement function and provide one of these values. If the application does not
// implement the notification callback (one of the AppConnectDelegate functions), AppConnect will set the policy's state
// to ACPOLICY_UNSUPPORTED.
typedef enum {
    ACPOLICY_UNSUPPORTED = 0, // The policy is not supported by this application
    ACPOLICY_APPLIED     = 1, // The policy was applied successfully
    ACPOLICY_ERROR       = 2, // An error occurred applying the policy
} ACPolicyState;

// An enum listing all possible managed policies
typedef enum {
    ACMANAGEDPOLICY_UNKNOWN      =  0, // The AppConnect library has not yet determined whether the app is managed by
                                       // MobileIron
    ACMANAGEDPOLICY_UNMANAGED    =  1, // The application is not currently managed by MobileIron
    ACMANAGEDPOLICY_MANAGED      =  2, // The application is currently managed by MobileIron
} ACManagedPolicy;

// An enum listing all possible authorization states
typedef enum {
    ACAUTHSTATE_UNAUTHORIZED    =  0, // The user is not authorized to access sensitive data or views in this app.
    ACAUTHSTATE_AUTHORIZED      =  1, // This is the only state in which the user is authorized to access sensitive
    // data or views.
    ACAUTHSTATE_RETIRED         =  2, // The app must erase all sensitive data. The user is not authorized to access
    // sensitive data or views in this app.
} ACAuthState;

// An enum listing all possible pasteboard policies
typedef enum {
    ACPASTEBOARDPOLICY_UNAUTHORIZED =  0, // The application may not write data to the pasteboard.
    ACPASTEBOARDPOLICY_AUTHORIZED   =  1, // The application may write data to the pasteboard.
} ACPasteboardPolicy;

// An enum listing all possible open in policies
typedef enum {
    ACOPENINPOLICY_UNAUTHORIZED =  0, // The application may not use Open In.
    ACOPENINPOLICY_AUTHORIZED   =  1, // The application may use Open In.
    ACOPENINPOLICY_WHITELIST    =  2, // The application may only use Open In to send documents to applications in the
                                      // whitelist
} ACOpenInPolicy;

// An enum listing all possible print policies
typedef enum {
    ACPRINTPOLICY_UNAUTHORIZED =  0, // The application may not use Print.
    ACPRINTPOLICY_AUTHORIZED   =  1, // The application may use Print.
} ACPrintPolicy;

// An enum listing all possible secure file policies.
typedef enum {
    ACSECUREFILEIOPOLICY_OPTIONAL =  0, // The application may store sensitive files using iOS filessytem APIs or
                                        // AppConnect secure file storage
    ACSECUREFILEIOPOLICY_REQUIRED =  1, // The application must store sensitive files using only AppConnect secure file
                                        // storage. See ACSecureFile.h.
} ACSecureFileIOPolicy;

// An enum describing the availability of AppConnect secure services, such as secure file IO.
typedef enum {
    ACSECURESERVICESAVAILABILITY_UNAVAILABLE = 0, // Secure services are currently unavailable.
    ACSECURESERVICESAVAILABILITY_AVAILABLE   = 1, // Secure services are currently available.
} ACSecureServicesAvailability;

// An enum classifying log messages into different levels.
typedef enum {
    ACLOGLEVEL_ERROR   = 0, // Error messages
    ACLOGLEVEL_WARNING = 1, // Warning messages
    ACLOGLEVEL_STATUS  = 2, // Significant status messages such as app launch and major user actions.
    ACLOGLEVEL_INFO    = 3, // Additional informational messages
    ACLOGLEVEL_VERBOSE = 4, // Verbose messages which may include sensitive information
    ACLOGLEVEL_DEBUG   = 5, // Debug messages which may include sensitive information
} ACLogLevel;

// Name of an exception thrown if the properties of AppConnect singleton object
// are accessed before AppConnect is ready.
extern NSString * const ACPropertyAccessException;

@interface AppConnect : NSObject {
}

// The version of the AppConnect library.
+(NSString *)version;

// A Boolean flag to indicate whether the properties on the AppConnect singleton can now be accessed.
// The value is YES if the properties are valid and can now be accessed; NO, otherwise.
// When the value is NO, accessing the properties will throw ACPropertyAccessException.
@property (nonatomic, readonly, getter=isReady) BOOL ready;

// The current managed policy.
// See the ACManagedPolicy enum for a description of possible states.
@property (nonatomic, readonly) ACManagedPolicy managedPolicy;

// The current authorization state.
// See the ACAuthStates enum for a description of possible states.
@property (nonatomic, readonly) ACAuthState authState;

// A message describing the current authorization state.
@property (unsafe_unretained, nonatomic, readonly) NSString *authMessage;

// The current pasteboard policy.
// See the ACPasteboardPolicy enum for a description of possible policies.
@property (nonatomic, readonly) ACPasteboardPolicy pasteboardPolicy;

// The current open in policy.
// See the ACOpenInPolicy enum for a description of possible policies.
@property (nonatomic, readonly) ACOpenInPolicy openInPolicy;

// The current open in whitelist.
// The set contains NSStrings. Each NSString is a bundleID of an app that is allowed to open documents from the app.
@property (unsafe_unretained, nonatomic, readonly) NSSet *openInWhitelist;

// The current print policy.
// See the ACPrintPolicy enum for a description of possible policies.
@property (nonatomic, readonly) ACPrintPolicy printPolicy;

// The current secure file IO policy.
// See the ACSecureFileIOPolicy enum for a description of possible policies.
@property (nonatomic, readonly) ACSecureFileIOPolicy secureFileIOPolicy;

// The current app-specific configuration.
@property (unsafe_unretained, nonatomic, readonly) NSDictionary *config;

// Whether secure services are currently available.
//
// If this is ACSECURESERVICESAVAILABILITY_AVAILABLE, secure services are currently available. AppConnect secure file
// storage can access secure files.
//
// If this is ACSECURESERVICESAVAILABILITY_UNAVAILABLE, secure services are currently unavailable. AppConnect secure
// file storage is unable to access secure files.
@property (nonatomic, readonly) ACSecureServicesAvailability secureServicesAvailability;

// The current log level
//
// See the -logAtLevel:format:... method for a description of the log level system. See the ACLogLevel enum for an
// explanation of the log levels.
//
// This function is safe to call when AppConnect is stopped. If AppConnect is stopped, this returns ACLOGLEVEL_STATUS.
+(ACLogLevel)logLevel;

// A delegate that will receive AppConnect notifications. See the AppConnectDelegate protocol for details.
// WARNING: The delegate is not retained to avoid circular dependencies between this class and the delegate.
@property (nonatomic, readwrite, unsafe_unretained) id<AppConnectDelegate> appConnectDelegate;

// The designated initializer for AppConnect. appConnectDelegate must not be nil.
// Applications must call this method once before calling any other AppConnect methods.
+(void)initWithDelegate:(id<AppConnectDelegate>)appConnectDelegate;

// Get the shared instance of AppConnect. AppConnect is a singleton. Applications do not create their own instances of
// AppConnect. Instead applications must use this class method to get the one shared instance of AppConnect. You must
// call +initWithDelegate: before calling sharedInstance. Otherwise sharedInstance will return nil.
+(AppConnect *)sharedInstance;

// Start the AppConnect system. This must be called in the UIApplicationDelegate's
// application:didFinishLaunchingWithOptions method. launchOptions must be the value provided by
// applicationDidFinishLaunchingWithOptions.
-(void)startWithLaunchOptions:(NSDictionary *)launchOptions;

// Retire the application. Most applications do not need to call this method; it is primarily for dual-mode
// applications. This method sets the authState to ACAUTHSTATE_RETIRED, and sets the authMessage to a message stating
// that the application has retired itself. This also sets all other policies to their defaults, which erases any secure
// information in the policies, such as certificates or passwords in the config.
-(void)retire;

// Stop the AppConnect system. Only dual-mode applications should call this method, and only when switching from
// MobileIron mode to non-MobileIron mode. This stops all AppConnect functions and deallocs the shared instance. After
// calling this method, all other methods must not be called and will have undefined result, except for the following:
//   -initWithDelegate:
//   +logLevel
//   +logAtLevel:format:...
//   +logAtLevel:format:args:
-(void)stop;

// When the AppConnectDelegate receives the -appConnect:authStateChangedTo:withMessage: callback it must call this
// function some time later to acknowledge the new policy. The policyState parameter indicates the new state. See
// the ACPolicyState enum for the possible acknowlegements. ACPOLICY_UNSUPPORTED is not permitted; all applications
// must support all auth states. The message parameter is an optional message describing the acknowledgement. This is
// primarily useful for describing the error when the policyState is ACPOLICY_ERROR.
-(void)authStateApplied:(ACPolicyState)policyState message:(NSString *)message;

// When the AppConnectDelegate receives the -appConnect:configChangedTo: callback it must call this function some time
// later to acknowledge the new config. The policyState parameter indicates the new state. See the ACPolicyState enum
// for the possible acknowledgements. The message parameter is an optional message describing the acknowledgement. The
// is primarily useful for describing the error when the policyState is ACPOLICY_ERROR.
//
// If the AppConnectDelegate does not implement the -appConnect:configChangedTo: method, this is equivalent to
// automatically calling this function with a policyState of ACPOLICY_UNSUPPORTED. In this case a standard message is
// supplied.
-(void)configApplied:(ACPolicyState)policyState message:(NSString *)message;

// When the AppConnectDelegate receives the -appConnect:openInPolicyChangedTo:whitelist: callback it must call this
// function some time later to acknowledge the new policy. The policyState parameter indicates the new state. See the
// ACPolicyState enum for the possible acknowledgements. The message parameter is an optional message describing the
// acknowledgement. The is primarily useful for describing the error when the policyState is ACPOLICY_ERROR.
//
// If the AppConnectDelegate does not implement the -appConnect:openInPolicyChangedTo: method, this is equivalent to
// automatically calling this function with a policyState of ACPOLICY_UNSUPPORTED. In this case a standard message is
// supplied.
-(void)openInPolicyApplied:(ACPolicyState)policyState message:(NSString *)message;

// When the AppConnectDelegate receives the -appConnect:pasteboardPolicyChangedTo: callback it must call this
// function some time later to acknowledge the new policy. The policyState parameter indicates the new state. See the
// ACPolicyState enum for the possible acknowledgements. The message parameter is an optional message describing the
// acknowledgement. The is primarily useful for describing the error when the policyState is ACPOLICY_ERROR.
//
// If the AppConnectDelegate does not implement the -appConnect:pasteboardPolicyChangedTo: method, this is equivalent to
// automatically calling this function with a policyState of ACPOLICY_UNSUPPORTED. In this case a standard message is
// supplied.
-(void)pasteboardPolicyApplied:(ACPolicyState)policyState message:(NSString *)message;

// When the AppConnectDelegate receives the -appConnect:printPolicyChangedTo: callback it must call this function some
// time later to acknowledge the new policy. The policyState parameter indicates the new state. See the ACPolicyState
// enum for the possible acknowledgements. The message parameter is an optional message describing the acknowledgement.
// The is primarily useful for describing the error when the policyState is ACPOLICY_ERROR.
//
// If the AppConnectDelegate does not implement the -appConnect:printPolicyChangedTo: method, this is equivalent to
// automatically calling this function with a policyState of ACPOLICY_UNSUPPORTED. In this case a standard message is
// supplied.
-(void)printPolicyApplied:(ACPolicyState)policyState message:(NSString *)message;

// When the AppConnectDelegate receives the -appConnect:secureFileIOPolicyChangedTo: callback it must call this
// function some time later to acknowledge the new policy. The policyState parameter indicates the new state. See the
// ACPolicyState enum for the possible acknowledgements. The message parameter is an optional message describing the
// acknowledgement. The is primarily useful for describing the error when the policyState is ACPOLICY_ERROR.
//
// If the AppConnectDelegate does not implement the -appConnect:secureFileIOPolicyChangedTo: method, this is equivalent
// to automatically calling this function with a policyState of ACPOLICY_UNSUPPORTED. In this case a standard message is
// supplied.
-(void)secureFileIOPolicyApplied:(ACPolicyState)policyState message:(NSString *)message;

// Display a message using the MobileIron client.
//
// If message is nil, this function does nothing.
//
// This is a convenience method. When authState changes to ACAUTHSTATE_UNAUTHORIZED, the application must exit any
// sensitive portion of the application. This may make it difficult to display the authMessage to the user. While it is
// a better user experience for the application to display the authMessage, it can opt to have the MobileIron client
// display the message instead by using this method.
-(void)displayMessage:(NSString *)message;

// Provides a key that can be used for custom cryptography purposes within the app.
//
// The index argument is used to derive a key for a specific purpose. The app must select a different index for
// different encryption purposes. Reusing an index for a different encryption purpose weakens the key and makes it more
// vulnerable to brute force attacks. For instance, the app should use different indices to derive different keys for
// AES, SHA-1, and HMAC.
//
// *pKey must point to a writeable buffer of at least 32 bytes. If successful, returns nil and *pKey is filled with
// a 32 byte long key. If secure services are not currently available, this fails and returns an NSError with domain
// ACErrorDomain and code ACE_NO_KEYS_ERROR. If pKey or index is nil, this fails and returns an NSError with domain
// ACErrorDomain and code ACE_INVALID_ARGUMENT.
-(NSError *)derivedAppKey:(uint8_t *)pKey withIndex:(NSString *)index;

// Provides a key that can be used for custom cryptography purposes between AppConnect apps on the same device. Passing
// the same arguments to this function in another app on the same device will derive the same shared key.
//
// The index argument is used to derive a key for a specific purpose. The app must select a different index for
// different encryption purposes. Reusing an index for a different encryption purpose weakens the key and makes it more
// vulnerable to brute force attacks. For instance, the app should use different indices to derive different keys for
// AES, SHA-1, and HMAC.
//
// *pKey must point to a writeable buffer of at least 32 bytes. If successful, returns nil and *pKey is filled with
// a 32 byte long key. If secure services are not currently available, this fails and returns an NSError with domain
// ACErrorDomain and code ACE_NO_KEYS_ERROR. If pKey or index is nil, this fails and returns an NSError with domain
// ACErrorDomain and code ACE_INVALID_ARGUMENT.
-(NSError *)derivedSharedKey:(uint8_t *)pKey withIndex:(NSString *)index;

// Generates log messages which are sent to the Apple System Log facility (console).
//
// If the current log level is at or above logLevel, this prepends the log level to the given message and then passes
// the message to NSLog().
//
// This function is safe to call when AppConnect is stopped. If AppConnect is stopped, this behaves as if the current
// log level is ACLOGLEVEL_ERROR.
+(void)logAtLevel:(ACLogLevel)logLevel message:(NSString *)message;

// Generates log messages which are sent to the Apple System Log facility (console).
//
// If the current log level is at or above logLevel, this prepends the log level to the format and then passes the
// format and variable argument list to NSLogv().
//
// This function is safe to call when AppConnect is stopped. If AppConnect is stopped, this behaves as if the current
// log level is ACLOGLEVEL_ERROR.
+(void)logAtLevel:(ACLogLevel)logLevel format:(NSString *)format, ... NS_FORMAT_FUNCTION(2,3);

// Generates log messages which are sent to the Apple System Log facility (console).
//
// This is identical to +logAtLevel:format:... except with an explicit va_list
+(void)logAtLevel:(ACLogLevel)logLevel format:(NSString *)format args:(va_list)args NS_FORMAT_FUNCTION(2,0);

// Controls local caching for tunneled URL requests. Pass YES to enable caching and pass NO to disable it.
//
// The default behavior in AppConnect tunneling is to disable caching for tunneled requests. This is to ensure
// that unauthorized apps will not have access to secure backend data. Caching should the be left disabled
// unless the app has specific requirements to use a custom local cache that supplies data for and caches
// data from tunneled requests.
//
// Disabling caching would clear the entire cache, including non-tunneled requests.
-(void)allowLocalCachingForTunneledRequests:(BOOL)flag;

@end

@protocol AppConnectDelegate <NSObject>

@required

// Notification that the value of the 'ready' property has changed. This notification is sent after the
// properties on the AppConnect singleton have been initialized and are ready for access. This notification
// will be sent once after the app is launched.
-(void)appConnectIsReady:(AppConnect *)appConnect;

// Notification that the app's auth state and/or message has changed. See the ACAuthState enum for a description of the
// various states.
//
// If the state changes to ACAUTHSTATE_UNAUTHORIZED, the app must exit any sensitive portion of the application.
//
// If the state changes to ACAUTHSTATE_RETIRED, the app must exit any sensitive portion of the application and delete
// all sensitive data.
//
// NOTE: It is possible for newAuthState to be the same as the previous authState, but the message explaining the
// authState has changed.
//
// After reacting to the new auth state the app must call -authStateApplied:message:
-(void) appConnect:(AppConnect *)appConnect authStateChangedTo:(ACAuthState)newAuthState withMessage:(NSString *)message;

@optional
// Notification that the app's managed policy has changed.
-(void) appConnect:(AppConnect *)appConnect managedPolicyChangedTo:(ACManagedPolicy)newManagedPolicy;

// Notification that the app's config has changed.
//
// After applying the new config the app must call -configApplied:message:
-(void) appConnect:(AppConnect *)appConnect configChangedTo:(NSDictionary *)newConfig;

// Notification that the app's Open In policy has changed. See the ACOpenInPolicy enum for a description of the various
// policies. See the openInWhitelist property for a description of the whitelist parameter.
//
// After applying the new policy the app must call -openInPolicyApplied:message:
-(void) appConnect:(AppConnect *)appConnect openInPolicyChangedTo:(ACOpenInPolicy)newOpenInPolicy whitelist:(NSSet *)newWhitelist;

// Notification that the app's pasteboard policy has changed. See the ACPasteboardPolicy enum for a description of the
// various policies.
//
// After applying the new policy the app must call -pasteboardPolicyApplied:message:
-(void) appConnect:(AppConnect *)appConnect pasteboardPolicyChangedTo:(ACPasteboardPolicy)newPasteboardPolicy;

// Notification that the app's print policy has changed. See the ACPrintPolicy enum for a description of the various
// policies.
//
// After applying the new policy the app must call -printPolicyApplied:message:
-(void) appConnect:(AppConnect *)appConnect printPolicyChangedTo:(ACPrintPolicy)newPrintPolicy;

// Notification that the app's secure file policy has changed. See the ACSecureFileIOPolicy enum for a description of
// the various policies.
//
// After applying the new policy the app must call -secureFileIOPolicyApplied:message:
-(void) appConnect:(AppConnect *)appConnect secureFileIOPolicyChangedTo:(ACSecureFileIOPolicy)newSecureFileIOPolicy;

// Notification that the log level has changed. See the ACLogLevel enum for a description of the various levels.
-(void) appConnect:(AppConnect *)appConnect logLevelChangedTo:(ACLogLevel)newLogLevel;

// Notification that the availability of secure services has changed. Currently the only secure services are secure file
// IO and derived keys.
//
// If available is YES, secure features are currently available. AppConnect secure file storage is able to open, read,
// and write secure files. -derivedAppKey:length:withIndex: and -derivedSharedKey:length:withIndex: are available.
//
// If available is NO, secure data is currently unavailable. AppConnect secure file storage is unable to open, read, or
// write secure files. -derivedAppKey:length:withIndex: and -derivedSharedKey:length:withIndex: are unavailable and will
// return an error.
-(void) appConnect:(AppConnect *)appConnect secureServicesAvailabilityChangedTo:(ACSecureServicesAvailability)secureServicesAvailability;

@end
