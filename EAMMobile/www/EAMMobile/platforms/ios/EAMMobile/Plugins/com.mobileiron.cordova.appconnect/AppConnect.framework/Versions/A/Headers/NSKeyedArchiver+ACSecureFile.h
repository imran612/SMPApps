//
//  NSKeyedArchiver+ACSecureFile.h
//  Category of NSKeyedArchiver adding AppConnect Secure File IO
//
//  Copyright (c) 2013 MobileIron. All rights reserved.
//
//  YOUR USE AND DISTRIBUTION OF THIS SOFTWARE IS SUBJECT TO THE SOFTWARE DEVELOPMENT KIT (SDK) AGREEMENT BETWEEN
//  YOU AND MOBILE IRON, INC. (“MI”).  USE OR DISTRIBUTION NOT IN STRICT ACCORDANCE WITH THE AGREEMENT IS PROHIBITED.
//

#import <Foundation/Foundation.h>
#import "ACError.h"

@interface NSKeyedArchiver (ACSecureFile)

+ (BOOL)archiveRootObject:(id)rootObject toSecureFile:(NSString *)path error:(NSError *__autoreleasing *)error;
+ (BOOL)archiveRootObject:(id)rootObject toSecureFile:(NSString *)path atomically:(BOOL)atomically error:(NSError *__autoreleasing *)error;

@end
