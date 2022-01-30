import { SignIn } from '../../pageOfObject/SignIn';
import { Post } from '../../pageOfObject/Post';
import { Uploader } from '../../pageOfObject/Uploader';
import { PhotoShare } from '../../pageOfObject/PhotoShare';
const singIn = new SignIn();
const post = new Post();
const upload = new Uploader();
const photo = new PhotoShare();
describe('post testing ', () => {
    beforeEach(() => {
        singIn.nav();
        cy.contains('a', 'Log In').click();
        singIn.fillEmail('mostafaiiuccse14@gmail.com');
        singIn.NextButton();
        singIn.fillPassword('161114Mostafa');
        singIn.SignInButton();
    })
    it('Photo search', () => {
        post.searchHandle('programming');
    })
    it('photo like ', () => {
        post.searchHandle('programming');
        post.likePhoto();
    })
    it('photo uploader', () => {
        upload.uploadHandle();
    })
    it('photo share ', () => {
        photo.share();
        cy.contains('span','Share').click();
    })
    it('Photo download ',()=>{
        photo.share();
        cy.contains('span','Download').click();
    })
})