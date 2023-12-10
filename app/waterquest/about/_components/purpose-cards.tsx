import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PurposeCards = () => {
  return (
    <section className="py-10">
      <div className="container grid w-full grid-cols-1 gap-8 px-4 mt-8 sm:grid-cols-1 lg:grid-cols-3">
            <Card className="border-none shadow-xl rounded-lg bg-blue-100">
              <CardHeader>
                <CardTitle>Who we are</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="">
                  Waterquest is a distinguished leader in the field of
                  sustainable water solutions, proudly serving the Southern
                  Africa region as a premium partner for Lorentz Solar Pumps. We
                  are dedicated to harnessing the power of the sun to provide
                  cutting-edge solar pumping solutions for a diverse range of
                  applications.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-xl rounded-lg bg-blue-100">
              <CardHeader>
                <CardTitle>Our mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="">
                  Our mission is to revolutionize water access and management.
                  We focus on both residential and agricultural sectors,
                  continually striving to improve the way we access and manage
                  water, utilizing sustainable and eco-friendly solutions.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-xl rounded-lg bg-blue-100">
              <CardHeader>
                <CardTitle>Our services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="">
                  At Waterquest, we specialize in tailoring solar pump solutions
                  to meet the unique needs of our customers. We offer innovative
                  solutions for residential water sources like pools, boreholes,
                  and wellpoints. For the demanding requirements of farms, we
                  handle irrigation and livestock water supply with expert
                  precision and efficiency.
                </p>
              </CardContent>
            </Card>
          </div>
    </section>
  );
};
export default PurposeCards;
