import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { RouterModule } from '@angular/router';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { AdvantageSectionComponent } from './components/advantage-section/advantage-section.component';
import { HowItWorksSectionComponent } from './components/how-it-works-section/how-it-works-section.component';
import { CoursesSectionComponent } from './components/courses-section/courses-section.component';
import { TestimonialsSectionComponent } from './components/testimonials-section/testimonials-section.component';
import { FaqSectionComponent } from './components/faq-section/faq-section.component';
import { CtaSectionComponent } from './components/cta-section/cta-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    HeroSectionComponent,
    AboutSectionComponent,
    AdvantageSectionComponent,
    HowItWorksSectionComponent,
    CoursesSectionComponent,
    TestimonialsSectionComponent,
    FaqSectionComponent,
    CtaSectionComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
