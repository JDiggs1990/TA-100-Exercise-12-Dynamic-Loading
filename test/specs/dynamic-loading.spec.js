import DynamicLoading1 from '../pageobjects/dynamic-loading.page.js';        //import class from pageobjects


// should first navigate to https://the-internet.herokuapp.com/dynamic_loading before clicking to follow each link





        describe('My Dynamic Loading Page', () => {
            it('should verify that start button exists', async () => {
                await DynamicLoading1.open();
                await browser.pause(3000);
                //get Example1()
               // await this.Example1.click //click  //*[@id="content"]/div/a[1] to click example one
                await expect(DynamicLoading1.startButton).toBeExisting();        //await !assertion(class.id)?    
                
            });
/*
            xit('should verify that start button still does not exists via skipping', async () => {
                await DynamicLoading2.open();
                await browser.pause(3000);
                await !expect(DynamicLoading2.startButton).(toBeExisting());       //!isExisting                 //gives false positive due to not assertion
                await browser.pause(5000);
            })
*/
                
                    //tohavetextcontaining      .toHaveText('Hello World!')

        });