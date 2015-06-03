//
//  NSFileManager+ACSecureFile.h
//  Category of NSFileManager adding AppConnect Secure File IO
//
//  Copyright (c) 2013 MobileIron. All rights reserved.
//
//  YOUR USE AND DISTRIBUTION OF THIS SOFTWARE IS SUBJECT TO THE SOFTWARE DEVELOPMENT KIT (SDK) AGREEMENT BETWEEN
//  YOU AND MOBILE IRON, INC. (“MI”).  USE OR DISTRIBUTION NOT IN STRICT ACCORDANCE WITH THE AGREEMENT IS PROHIBITED.
//

#import <Foundation/Foundation.h>
#import "ACError.h"

@interface NSFileManager (ACSecureFile)

- (BOOL)createSecureFileAtPath:(NSString *)path contents:(NSData *)contents attributes:(NSDictionary *)attributes error:(NSError *__autoreleasing*)error;
- (BOOL)moveSecureFileAtPath:(NSString *)srcPath toPath:(NSString *)dstPath error:(NSError *__autoreleasing*)error;
- (BOOL)moveSecureFileAtURL:(NSURL *)srcURL toURL:(NSURL *)dstURL error:(NSError *__autoreleasing*)error;
- (BOOL)copySecureFileAtPath:(NSString *)srcPath toPath:(NSString *)dstPath error:(NSError *__autoreleasing*)error;
- (BOOL)copySecureFileAtURL:(NSURL *)srcURL toURL:(NSURL *)dstURL error:(NSError *__autoreleasing*)error;
- (NSData *)secureContentsAtPath:(NSString *)path error:(NSError *__autoreleasing*)error;
- (BOOL)secureContentsEqualAtPath:(NSString *)path1 andPath:(NSString *)path2 error:(NSError *__autoreleasing*)error;

- (NSDictionary *)attributesOfSecureFileAtPath:(NSString *)path error:(NSError *__autoreleasing*)error;

@end