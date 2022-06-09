import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Элсэхэд анхаарах зүйлс'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-bottom hoverr">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-01.svg')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Бүртгүүлэх
                    </h4>
                  <p className="m-0 text-sm">
                    Бүртгэлийн үнэлгээний төвөөс өгсөн дугаарын дагуу бүртгүүлнэ
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom hoverr" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-02.svg')}
                      alt="Features tile icon 02"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Хөтөлбөрүүд
                    </h4>
                  <p className="m-0 text-sm">
                    Хөтөлбөрүүдийн талаарх мэдээлэлүүдийг ХӨТӨЛБӨРҮҮД цэснээс дэлгэрэнгүй
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom hoverr" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-03.svg')}
                      alt="Features tile icon 03"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Салбар сургууль
                    </h4>
                  <p className="m-0 text-sm">
                    Салбар сургуулиудийн мэдээлэлийг САЛБАР СУРГУУЛЬ цэснээс дэлгэрэнгүй
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom hoverr">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-04.svg')}
                      alt="Features tile icon 04"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Хувийн мэдээлэл
                    </h4>
                  <p className="m-0 text-sm">
                    Та өөрийнхөө БҮТ дугаараар бүртгүүлэн, бүртгэлээ баталгаажуулсаныхаа дараагаар хувийн мэдээлэлээ оруулна уу
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom hoverr" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-05.svg')}
                      alt="Features tile icon 05"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Хичээл сонголт
                    </h4>
                  <p className="m-0 text-sm">
                    Та хувийн мэдээлэлээ сонгсоныхоо дараагаар мэргэжил сонголтоо хийнэ үү
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom hoverr" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-06.svg')}
                      alt="Features tile icon 06"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Бүртгэл
                    </h4>
                  <p className="m-0 text-sm">
                    Та бүртгүүлсэн мэдээлэл болон сонгсон мэргэжилээ ХУВИЙН МЭДЭЭЛЭЛ цэснээс харна уу.
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;