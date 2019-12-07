import {Component, OnChanges, OnInit, TemplateRef} from '@angular/core';
import {Site} from '../../Models/Site';
import {AuthService} from '../../Services/AuthentificationUser/auth.service';
import {SitesService} from '../../Services/sites.service';
import {Admin} from '../../Models/Admin';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Directeurdesstages} from '../../Models/Directeurdesstages';
import {DirecteurdesstageService} from '../../Services/directeurdesstage.service';
import {Router} from '@angular/router';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';

@Component({
  selector: 'app-sitessit',
  templateUrl: './sitessit.component.html',
  styleUrls: ['./sitessit.component.scss']
})
export class SitessitComponent implements OnInit {
  modalRef: BsModalRef;
  sites: Site[]=[];
  directeurdestages: Directeurdesstages[] = [];
  admin: Admin;
  site: Site;

  siteform = new FormGroup({
    nom : new FormControl('', [Validators.required]),
    addresse : new FormControl('',[Validators.required])
  });

  constructor(private modalService: BsModalService,private connectedAdmin: AuthService, private siteser: SitesService, private directeurservice: DirecteurdesstageService, private router: Router) { }

  ngOnInit() {
    this.siteser.getallsites().subscribe(data => { this.sites = data ;
      console.log(data) ; }
    );
    this.directeurservice.getalldirecteurdesstages().subscribe(data => {this.directeurdestages = data ;
      console.log(data) ; }) ;
  }


  delete(id: number){
    this.siteser.deletesitebyid(id).subscribe();
    this.siteser.getallsites().subscribe(data => { this.sites = data ;
      console.log(data) ; }
    );
  }
  add(){
    this.site= new Site(null,this.siteform.value['nom'],this.siteform.value['addresse'],null,null);
    console.log(this.site);
    this.siteser.addsite(this.site).subscribe();
    this.siteform.reset();
    this.siteser.getallsites().subscribe(data => { this.sites = data ;
      console.log(data) ; console.log('azizzzzzzz') ; }
    );
  }

  get namec(){
    return this.siteform.get('nom');
  }
  get addrssec(){
    return this.siteform.get('addresse');
  }
  affecter(ids: number , idds: number) {
    this.siteser.affecterdirecteur(ids , idds).subscribe();
    this.siteser.getallsites().subscribe(data => { this.sites = data ;
      console.log(data) ; console.log(idds) ; }
    );

  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);


  }





}
