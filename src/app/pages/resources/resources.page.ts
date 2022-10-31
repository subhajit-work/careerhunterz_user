import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { IonContent, ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonUtils } from 'src/app/services/common-utils/common-utils';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NgForm } from '@angular/forms';
 
/* tslint:disable */ 
@Component({
  selector: 'app-resources',
  templateUrl: './resources.page.html',
  styleUrls: ['./resources.page.scss'],
})

export class ResourcesPage implements OnInit, OnDestroy {

  @ViewChild(IonContent) content: IonContent;

  main_url = environment.apiUrl;
  file_url = environment.fileUrl;

  // variable declartion section
  model: any = {};
  isListLoading = false;
  page = 1;
  noDataFound = true;
  fetchItems;
  tableHeaderData;
  tableHeaderDataDropdown;
  current_url_path_name;
  private viewPageDataSubscribe: Subscription;
  private getCompanyEventSubscribe: Subscription;
  private getBlogSubscribe: Subscription;
  private formSubmitSearchSubscribe: Subscription;
  parms_action_id;
  listing_view_url;
  viewLoadData;
  viewData;
  disableApplyButton = false;
  commonPageData;
  selectLoadingDepend: boolean;
  getCompanyBlog_api;
  blogData: any;
  getCompanyEvent_api;
  eventDate;
  footer;
  

  constructor(
    private activatedRoute : ActivatedRoute,
    private router: Router,
    private http : HttpClient,
    private modalController : ModalController,
    private commonUtils : CommonUtils,
    private authService : AuthService,
  ) { }

  // tslint:disable-next-line: comment-format
  // pager object
  pager: any = {};
  // paged items
  pageItems: any[];

  listAlldata;

  // mat-accordion open start
    step = 0;

    setStep(index: number) {
      this.step = index;
    }
  // mat-accordion end

  // ------ init function call start -------
  commonFunction(){
    // get active url name
    this.current_url_path_name =  this.router.url.split('/')[1] + 'ColumnSelect';
    this.commonUtils.getPathNameFun(this.router.url.split('/')[1]);

    this.parms_action_id = this.activatedRoute.snapshot.paramMap.get('id');
    
    // view page url name
    this.listing_view_url = 'cms/frontend_return_index' ;

    // view data call (autologin check)
    this.viewPageDataSubscribe = this.commonUtils.getSiteInfoObservable.subscribe(res =>{
      console.log('getSiteInfoObservable res>>>>>>>>>>>>>>>>>>>.. >', res);
      if(res){
        this.viewPageData(); 
      }
    })
    // getCompanyBlog api
    this.getCompanyBlog_api = 'get-blog';
    this.getCompanyBlog();

    // getCompanyEvent api
    this.getCompanyEvent_api = 'get-event';
    this.getCompanyEvent();

    // view data call (userdetails from header login only)
    this.viewPageDataSubscribe = this.commonUtils.signinCheckObservable.subscribe(res =>{
      console.log('getSiteInfoObservable res>>>>>>>>>>>>>>>>>>>..11111 >', res);
      if(res){
        this.viewPageData(); 
      }
    })

    // get data from commoninfo api
    this.viewPageDataSubscribe = this.commonUtils.commonDataobservable.subscribe((res:any) =>{
      console.log('commonPageData data res>>>>>>>>>>>>>>>>>>>.. >', res);
      if(res){
        this.commonPageData = res;
      }
    })

  }


  ngOnInit() {
  }

  //getCompanyEvent
  getCompanyEvent(){
    this.selectLoadingDepend = true;
    this.getCompanyEventSubscribe = this.http.get(this.getCompanyEvent_api).subscribe(
      (res:any) => {
      this.selectLoadingDepend = false;
      this.eventDate =res.return_data;
      console.log('footer', res);
    },
    errRes => {
      this.selectLoadingDepend = false;
    }
    );
  }

  // scroll event detect
  isFixedHeader;
  onScrollHedearFix(event) {
    // console.log('scroll onnnnnnnnn', event.detail.scrollTop);
    if (event.detail.scrollTop > 56) {
      // console.log("scrolling down, hiding footer...iffffffffffff");
      this.isFixedHeader = true;
    } else {
      // console.log("scrolling up, revealing footer...elseeeeeeeeeeeeeee");
      this.isFixedHeader = false;
    };
  }

  // ion View Will Enter call
  ionViewWillEnter() {
    this.commonFunction();
  }

  ionViewDidEnter(){
    // go to scroll top in mozila browser
    this.content.scrollToTop(0);
  }

  // ======================== Consultation submit start ===================
  form_submit_text = 'Surging Employability';
  form_api = 'addcontactus';

  onSubmitConsultation(form:NgForm){
    console.log("add form submit >", form.value);

    this.form_submit_text = 'Submitting';

    // get form value
    let fd = new FormData();
    for (let val in form.value) {
      if(form.value[val] == undefined){
        form.value[val] = '';
      }
      fd.append(val, form.value[val]);
    };

    console.log('value >', fd);

    if(!form.valid){
      return;
    }

    this.formSubmitSearchSubscribe = this.http.post(this.form_api, fd).subscribe(
      (response:any) => {
        this.form_submit_text = 'Surging Employability';
        console.log("add form response >", response);

        if(response.return_status > 0){
          // this.commonUtils.presentToast(response.return_message);
          this.commonUtils.presentToast('success', response.return_message);
          form.reset();

          // this.notifier.notify( type, 'aa' );
            // form.reset();

            // this.router.navigateByUrl(`skill-list?location=${form.value.location}&degree_id=${form.value.degree_id}&interest_id=${form.value.interest_id}`);
          
        }
      },
      errRes => {
        this.form_submit_text = 'Surging Employability';
      }
    );

  }
  // Consultation submit end


  // open description
  openDescription(event, _item, _items){
    _item.isOpenDescription = !_item.isOpenDescription;

    /* _items.forEach(element => {
      element.isOpenDescription = false;
    });
    if(_item){
      _item.isOpenDescription = true;
    } */
  }

  //getCompanyBlog
  getCompanyBlog(){
    this.selectLoadingDepend = true;
    this.getBlogSubscribe = this.http.get(this.getCompanyBlog_api).subscribe(
      (res:any) => {
      this.selectLoadingDepend = false;
      this.blogData =res.return_data;
      console.log('sss', res);
    },
    errRes => {
      this.selectLoadingDepend = false;
    }
    );
  }

  //----------- banner slick slider for angular start -----------
  title = 'ngSlick';
  
  /* slides = [
    {img: "assets/images/banner-1.jpg"},
    {img: "assets/images/banner-1.jpg"},
    {img: "assets/images/banner-1.jpg"},
    {img: "assets/images/banner-1.jpg"},
  ]; */

  // Blog list
  blogList = {
    "slidesToShow": 3, 
    "slidesToScroll": 1,
    "dots":false,
    "infinite": true,
    "autoplay": true,
    "speed": 800,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  };

  // Event List
  eventList = {
    "slidesToShow": 3, 
    "slidesToScroll": 1,
    "dots":false,
    "infinite": true,
    "autoplay": true,
    "speed": 800,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  };

  
  /* addSlide() {
    this.slides.push({img: ""});
  }
  
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  } */
  
  slickInit(e) {
    // console.log('........ slick initialized ......');
  }
  
  breakpoint(e) {
    // console.log('breakpoint');
  }
  
  afterChange(e) {
    // console.log('afterChange');
  }
  
  beforeChange(e) {
    // console.log('beforeChange');
  }
//--banner slick slider for angular end--


  // ================== view data fetch start =====================
    viewPageData(){
      this.viewLoadData = true;
      this.viewPageDataSubscribe = this.http.get(this.listing_view_url).subscribe(
        (res:any) => {
          this.viewLoadData = false;
          console.log("view data  res -------------------->", res.return_data);
          if(res.return_status > 0){
            this.viewData = res.return_data.about_us;
          }
        },
        errRes => {
          this.viewLoadData = false;
        }
      );
    }
  // view data fetch end


  // ----------- destroy subscription start ---------
    ngOnDestroy() {
      if(this.viewPageDataSubscribe !== undefined){
        this.viewPageDataSubscribe.unsubscribe();
      }
      if(this.getCompanyEventSubscribe !== undefined){
        this.getCompanyEventSubscribe.unsubscribe();
      }
      if(this.getBlogSubscribe !== undefined){
        this.getBlogSubscribe.unsubscribe();
      }
      if(this.formSubmitSearchSubscribe !== undefined){
        this.formSubmitSearchSubscribe.unsubscribe();
      }
    }
  // destroy subscription end
}