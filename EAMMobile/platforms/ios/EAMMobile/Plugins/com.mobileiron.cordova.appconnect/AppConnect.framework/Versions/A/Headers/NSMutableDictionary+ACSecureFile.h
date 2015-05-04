//
//  NSMutableDictionary+ACSecureFile.h
//  Category of NSMutableDictionary adding AppConnect Secure File IO
//
//  Copyright (c) 2013 MobileIron. All rights reserved.
//
//  YOUR USE AND DISTRIBUTION OF THIS SOFTWARE IS SUBJECT TO THE SOFTWARE DEVELOPMENT KIT (SDK) AGREEMENT BETWEEN
//  YOU AND MOBILE IRON, INC. (“MI”).  USE OR DISTRIBUTION NOT IN STRICT ACCORDANCE WITH THE AGREEMENT IS PROHIBITED.
//

#import <Foundation/Foundation.h>
#import "ACError.h"

@interface NSMutableDictionary (ACSecureFile)

+ (id)dictionaryWithContentsOfSecureFile:(NSString *)path error:(NSError *__autoreleasing*)error;
+ (id)dictionaryWithContentsOfSecureURL:(NSURL *)aURL error:(NSError *__autoreleasing*)error;

- (id)initWithContentsOfSecureFile:(NSString *)path error:(NSError *__autoreleasing*)error;
- (id)initWithContentsOfSecureURL:(NSURL *)aURL error:(NSError *__autoreleasing*)error;

- (BOOL)writeToSecureFile:(NSString *)path atomically:(BOOL)flag error:(NSError *__autoreleasing*)error;
- (BOOL)writeToSecureURL:(NSURL *)aURL atomically:(BOOL)flag error:(NSError *__autoreleasing*)error;

@end
