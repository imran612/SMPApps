//
//  NSData+ACSecureFile.h
//  Category of NSData adding AppConnect Secure File IO
//
//  Copyright (c) 2013 MobileIron. All rights reserved.
//
//  YOUR USE AND DISTRIBUTION OF THIS SOFTWARE IS SUBJECT TO THE SOFTWARE DEVELOPMENT KIT (SDK) AGREEMENT BETWEEN
//  YOU AND MOBILE IRON, INC. (“MI”).  USE OR DISTRIBUTION NOT IN STRICT ACCORDANCE WITH THE AGREEMENT IS PROHIBITED.
//

#import <Foundation/Foundation.h>
#import "ACError.h"


@interface NSData (ACSecureFile)

+ (id)dataWithContentsOfSecureFile:(NSString *)path;
+ (id)dataWithContentsOfSecureFile:(NSString *)path options:(NSDataReadingOptions)mask error:(NSError **)errorPtr;
+ (id)dataWithContentsOfSecureURL:(NSURL *)url;
+ (id)dataWithContentsOfSecureURL:(NSURL *)url options:(NSDataReadingOptions)mask error:(NSError **)errorPtr;

- (id)initWithContentsOfSecureFile:(NSString *)path;
- (id)initWithContentsOfSecureFile:(NSString *)path options:(NSDataReadingOptions)mask error:(NSError **)errorPtr;
- (id)initWithContentsOfSecureURL:(NSURL *)url;
- (id)initWithContentsOfSecureURL:(NSURL *)url options:(NSDataReadingOptions)mask error:(NSError **)errorPtr;

- (BOOL)writeToSecureFile:(NSString *)path atomically:(BOOL)flag;
- (BOOL)writeToSecureFile:(NSString *)path options:(NSDataWritingOptions)mask error:(NSError **)errorPtr;
- (BOOL)writeToSecureURL:(NSURL *)aURL atomically:(BOOL)atomically;
- (BOOL)writeToSecureURL:(NSURL *)aURL options:(NSDataWritingOptions)mask error:(NSError **)errorPtr;

@end



