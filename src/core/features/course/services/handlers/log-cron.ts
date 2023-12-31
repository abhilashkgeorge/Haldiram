// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { Injectable } from '@angular/core';

import { CoreCronHandler } from '@services/cron';
import { CoreSites } from '@services/sites';
import { CoreCourse } from '@features/course/services/course';
import { makeSingleton } from '@singletons';

/**
 * Log cron handler. It will update last access of the user while app is open.
 */
@Injectable({ providedIn: 'root' })
export class CoreCourseLogCronHandlerService implements CoreCronHandler {

    name = 'CoreCourseLogCronHandler';

    /**
     * Execute the process.
     * Receives the ID of the site affected, undefined for all sites.
     *
     * @param siteId ID of the site affected, undefined for all sites.
     * @param force Wether the execution is forced (manual sync).
     * @returns Promise resolved when done, rejected if failure.
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async execute(siteId?: string, force?: boolean): Promise<void> {
        if (!siteId && !CoreSites.isLoggedIn()) {
            // No current site, stop.
            return;
        }

        const site = await CoreSites.getSite(siteId);

        return CoreCourse.logView(site.getSiteHomeId(), undefined, site.getId());
    }

    /**
     * Check whether it's a synchronization process or not.
     *
     * @returns Whether it's a synchronization process or not.
     */
    isSync(): boolean {
        return false;
    }

    /**
     * Get the time between consecutive executions.
     *
     * @returns Time between consecutive executions (in ms).
     */
    getInterval(): number {
        return 240000; // 4 minutes. By default platform will see the user as online if lastaccess is less than 5 minutes.
    }

}

export const CoreCourseLogCronHandler = makeSingleton(CoreCourseLogCronHandlerService);
