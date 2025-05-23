import Image from "next/image";
import React from "react";

function BlogDetails() {
  return (
    <div className="flex flex-col gap-6 font-manrope">
      <h1 className=" text-textBase text-xl md:text-2xl font-medium text-center">
        2025 ev dizaynı trendləri
      </h1>

      <Image
        src="/images/intro/hero.png"
        alt="2025 ev dizaynı trendləri"
        width={1000}
        height={500}
        className="w-full h-[240px] md:h-[440px] object-cover rounded-lg"
        priority
      />

      <p className="text-elementSecondaryDate text-base font-normal leading-6 text-right">
        15 Mart, 2025
      </p>

      <p className="text-elementSecondaryDate  text-base font-normal leading-6 text-center">
        Lorem ipsum dolor sit amet consectetur. Amet ac ac eu vulputate.
        Consectetur amet at augue nunc vestibulum aliquam suspendisse massa
        luctus. Cras ac velit netus sagittis leo augue pharetra in vestibulum.
        Pulvinar mi mi nisi et bibendum aliquet. Nullam sit erat facilisis velit
        id nibh aliquet tincidunt. Nec et in faucibus sed sed. Semper gravida
        convallis nulla odio massa arcu nunc pharetra tellus. Eros scelerisque
        nunc mauris aliquam viverra nulla pellentesque. Ut vivamus consequat
        orci leo felis ultricies. Nec dui ultricies massa et tristique.
        Suspendisse morbi integer quam sed ut ultrices ornare habitant. Mattis
        aliquet eget non pellentesque consectetur lectus interdum. Tempor ac a
        erat posuere pellentesque commodo in tortor. Sit suspendisse et lacus a
        ac risus in. Volutpat aliquet ultricies consequat urna. Quis mattis
        feugiat auctor etiam orci cras sed vitae elementum. Risus justo a nibh
        sit nulla tincidunt enim lorem tortor. Mauris consequat ipsum natoque
        etiam sed. Enim enim placerat eros viverra donec. Lorem ipsum dolor sit
        amet consectetur. Amet ac ac eu vulputate. Consectetur amet at augue
        nunc vestibulum aliquam suspendisse massa luctus. Cras ac velit netus
        sagittis leo augue pharetra in vestibulum. Pulvinar mi mi nisi et
        bibendum aliquet. Nullam sit erat facilisis velit id nibh aliquet
        tincidunt. Nec et in faucibus sed sed. Semper gravida convallis nulla
        odio massa arcu nunc pharetra tellus. Eros scelerisque nunc mauris
        aliquam viverra nulla pellentesque. Ut vivamus consequat orci leo felis
        ultricies. Nec dui ultricies massa et tristique. Suspendisse morbi
        integer quam sed ut ultrices ornare habitant. Mattis aliquet eget non
        pellentesque consectetur lectus interdum. Tempor ac a erat posuere
        pellentesque commodo in tortor. Sit suspendisse et lacus a ac risus in.
        Volutpat aliquet ultricies consequat urna. Quis mattis feugiat auctor
        etiam orci cras sed vitae elementum. Risus justo a nibh sit nulla
        tincidunt enim lorem tortor. Mauris consequat ipsum natoque etiam sed.
        Enim enim placerat eros viverra donec. Lorem ipsum dolor sit amet
        consectetur. Amet ac ac eu vulputate. Consectetur amet at augue nunc
        vestibulum aliquam suspendisse massa luctus. Cras ac velit netus
        sagittis leo augue pharetra in vestibulum. Pulvinar mi mi nisi et
        bibendum aliquet. Nullam sit erat facilisis velit id nibh aliquet
        tincidunt. Nec et in faucibus sed sed. Semper gravida convallis nulla
        odio massa arcu nunc pharetra tellus. Eros scelerisque nunc mauris
        aliquam viverra nulla pellentesque. Ut vivamus consequat orci leo felis
        ultricies. Nec dui ultricies massa et tristique. Suspendisse morbi
        integer quam sed ut ultrices ornare habitant. Mattis aliquet eget non
        pellentesque consectetur lectus interdum. Tempor ac a erat posuere
        pellentesque commodo in tortor. Sit suspendisse et lacus a ac risus in.
        Volutpat aliquet ultricies consequat urna. Quis mattis feugiat auctor
        etiam orci cras sed vitae elementum. Risus justo a nibh sit nulla
        tincidunt enim lorem tortor. Mauris consequat ipsum natoque etiam sed.
        Enim enim placerat eros viverra donec.
      </p>
    </div>
  );
}

export default BlogDetails;
