import React from "react";
import classes from "./FaqPage.module.css";
import cn from "clsx";
import Typography from "src/components/ui-kit/Typography";
import { T, useLocale } from "react-targem";
import Table from "src/components/Table";
import metrics from "content/metriсs.json";
import FaqPageTooltip from "./FaqPageTooltip";

const FaqPageUploadFieldsNParameterTree = () => {
  const { t } = useLocale();

  const tables = [
    {
      columns: [
        { title: "", key: "1" },
        { title: "", key: "2" },
      ],
      rows: metrics.map((m) => ({
        key: m.key,
        values: [
          {
            key: `${m.key}-key`,
            value: t(m.key),
          },
          {
            key: `${m.key}-title`,
            value: t(m.title),
          },
        ],
      })),
    },
  ];

  return (
    <>
      <Typography>
        <T message="Для простой навигации по базе данных мы создали «дерево» параметров: оно демонстрирует, какие индикаторы мы анализировали, как они связаны между собой и как с ними можно работать. Все показатели поделены на три раздела: основной состав, дополнительные характеристики по основному составу и дополнительный состав." />
      </Typography>
      <Typography>
        <T message="В некоторых случаях невозможно с уверенностью утверждать, как в статистике интерпретированы те или иные индикаторы, — Судебный департамент не предоставляет дополнительную информацию о сборе данных. Показатели, которые можно отнести к двум категориям, встречаются в «дереве» несколько раз и снабжены комментариями. Одинаковые показатели, обозначенные в таблицах по-разному, объединены в один пункт." />
      </Typography>
      <Typography isUpperCased>
        <b>
          <T message="Основной состав" />
        </b>
      </Typography>
      <Typography>
        <ol type="I" className={cn(classes.ulWithAdditionalMargin)}>
          <li>
            <b>
              <T message="Всего осуждено" />
            </b>{" "}
            <T message="(totalConvicted). Показатель описывает случаи, когда суд признал человека виновным и назначил наказание:" />
            <ol>
              <li>
                <b>
                  <T message="Пожизненное лишение свободы" />
                </b>{" "}
                <T message="(primaryLifeSentence)" />
              </li>
              <li>
                <b>
                  <T message="Лишение свободы" />
                </b>{" "}
                <T message="(primaryImprisonment). Категории нет в таблице, дана детализация по срокам наказания:" />
                <ol type="a">
                  <li>
                    <T message="Лишение свободы: количество осужденных по срокам" />{" "}
                    <b>
                      <T message="до 1 года включительно" />
                    </b>{" "}
                    <T message="(primaryImprisonment1);" />
                  </li>
                  <li>
                    <T message="Лишение свободы: количество осужденных по срокам" />{" "}
                    <b>
                      <T message="от 1 до 3 лет включительно" />
                    </b>{" "}
                    <T message="(primaryImprisonment1_3) — в некоторых таблицах Судебного департамента детализация по этим данным представлена единым блоком, в других дана раздельно по следующим категориям:" />
                    <ul>
                      <li>
                        <T message="Лишение свободы: количество осужденных по срокам" />{" "}
                        <b>
                          <T message="свыше 1 до 2 лет включительно" />
                        </b>{" "}
                        <T message="(primaryImprisonment1_2)" />
                      </li>
                      <li>
                        <T message="Лишение свободы: количество осужденных по срокам" />{" "}
                        <b>
                          <T message="свыше 2 до 3 лет включительно" />
                        </b>{" "}
                        <T message="(primaryImprisonment2_3)" />
                      </li>
                    </ul>
                  </li>
                  <li>
                    <T message="Лишение свободы: количество осужденных по срокам" />{" "}
                    <b>
                      <T message="свыше 3 до 5 лет включительно" />
                    </b>{" "}
                    <T message="(primaryImprisonment3_5)" />
                  </li>
                  <li>
                    <T message="Лишение свободы: количество осужденных по срокам" />{" "}
                    <b>
                      <T message="свыше 5 до 8 лет включительно" />
                    </b>{" "}
                    <T message="(primaryImprisonment5_8)" />
                  </li>
                  <li>
                    <T message="Лишение свободы: количество осужденных по срокам" />{" "}
                    <b>
                      <T message="свыше 8 до 10 лет включительно" />
                    </b>{" "}
                    <T message="(primaryImprisonment8_10)" />
                  </li>
                  <li>
                    <T message="Лишение свободы: количество осужденных по срокам" />{" "}
                    <b>
                      <T message="свыше 10 до 15 лет включительно" />
                    </b>{" "}
                    <T message="(primaryImprisonment10_15)" />
                  </li>
                  <li>
                    <T message="Лишение свободы: количество осужденных по срокам" />{" "}
                    <b>
                      <T message="свыше 15 до 20 лет включительно" />
                    </b>{" "}
                    <T message="(primaryImprisonment15_20)" />
                  </li>
                </ol>
              </li>
              <li>
                <b>
                  <T message="Арест" />
                </b>{" "}
                <T message="(primaryArrest)" />
              </li>
              <li>
                <b>
                  <T message="Ограничение свободы" />
                </b>{" "}
                <T message="(primaryRestrain) и" />{" "}
                <b>
                  <T message="ограничение свободы/ограничение по военной службе, содержание в дисциплинарной воинской части" />
                </b>{" "}
                <T message="(primaryRestrain2009). Это одинаковые показатели, но в таблицах они обозначены по-разному. Показатель primaryRestrain2009 относится только к данным 2009 года." />
              </li>
              <li>
                <b>
                  <T message="Ограничения по воинской службе" />
                </b>{" "}
                <T message="(primaryRestrictionsInMilitaryService). Этот показатель частично пересекается с пунктом I.4." />
                <FaqPageTooltip
                  tip={t("раздел «Основной состав», пункт I.4.")}
                />
                <T message="Вероятно, в некоторых таблицах эта мера наказания была объединена с другими, затем статистические формы поменяли" />
              </li>
              <li>
                <b>
                  <T message="Исправительные работы" />
                </b>{" "}
                <T message="(primaryCorrectionalLabour)" />
              </li>
              <li>
                <b>
                  <T message="Обязательные работы" />
                </b>{" "}
                <T message="(primaryCommunityService)" />
              </li>
              <li>
                <b>
                  <T message="Принудительные работы" />
                </b>{" "}
                <T message="(primaryForcedLabour)" />
              </li>
              <li>
                <b>
                  <T message="Штраф (основное наказание)" />
                </b>{" "}
                <T message="(primaryFine). Дана детализация по сумме штрафа:" />
                <ol type="a">
                  <li>
                    <T message="Штраф: количество осужденных по размеру штрафа" />{" "}
                    <b>
                      <T message="до 5 тысяч рублей" />
                    </b>{" "}
                    <T message="(primaryFine5);" />
                  </li>
                  <li>
                    <T message="Штраф: количество осужденных по размеру штрафа" />{" "}
                    <b>
                      <T message="свыше 5 тыс. до 25 тыс. рублей" />
                    </b>{" "}
                    <T message="(primaryFine5_25);" />
                  </li>
                  <li>
                    <T message="Штраф: количество осужденных по размеру штрафа" />{" "}
                    <b>
                      <T message="свыше 25 тыс. до 500 тыс. рублей" />
                    </b>{" "}
                    <T message="(primaryFine25_500);" />
                    <ul>
                      <li>
                        <T message="Штраф: количество осужденных по размеру штрафа" />{" "}
                        <b>
                          <T message="свыше 25 тыс. до 100 тыс. рублей" />
                        </b>{" "}
                        <T message="(primaryFine25_100);" />
                      </li>
                      <li>
                        <T message="Штраф: количество осужденных по размеру штрафа" />{" "}
                        <b>
                          <T message="свыше 100 тыс. до 300 тыс. рублей" />{" "}
                        </b>
                        <T message="(primaryFine100_300);" />
                      </li>
                      <li>
                        <T message="Штраф: количество осужденных по размеру штрафа" />{" "}
                        <b>
                          <T message="свыше 300 тыс. до 500 тыс. рублей" />{" "}
                        </b>
                        <T message="(primaryFine300_500);" />
                      </li>
                    </ul>
                  </li>
                  <li>
                    <T message="Штраф: количество осужденных по размеру штрафа" />{" "}
                    <b>
                      <T message="свыше 500 тыс. до 1 млн рублей" />{" "}
                    </b>
                    <T message="(primaryFine500_1M);" />
                  </li>
                  <li>
                    <T message="Штраф: количество осужденных по размеру штрафа" />{" "}
                    <b>
                      <T message="свыше 1 млн рублей" />{" "}
                    </b>
                    <T message="(primaryFine1M);" />
                  </li>
                </ol>
              </li>
              <li>
                <b>
                  <T message="Лишение права занимать определенные должности или заниматься определенной деятельностью" />
                </b>{" "}
                <T message="(primaryDisqualification);" />
              </li>
              <li>
                <b>
                  <T message="Содержание в дисциплинарной воинской части" />
                </b>{" "}
                <T message="(primaryMilitaryDisciplinaryUnit);" />
              </li>
              <li>
                <b>
                  <T message="Условное осуждение к иным мерам" />
                </b>{" "}
                <T message="Эта категория не квалифицируется как мера наказания (принято считать это наказанием, совмещенным с освобождением от него), однако в данных Судебного департамента она дана как еще один вид наказания." />
              </li>
              <li>
                <b>
                  <T message="Условное осуждение к лишению свободы" />
                </b>{" "}
                <T message="(primarySuspended). Эта категория не квалифицируется как мера наказания (принято считать это наказанием, совмещенным с освобождением от него), однако в данных Судебного департамента она дана как еще один вид наказания." />
              </li>
            </ol>
          </li>
          <li>
            <b>
              <T message="Оправдано" />
            </b>{" "}
            <T message="(acquittal). Показатель описывает случаи, когда по решению суда человек признан невиновным." />
          </li>
          <li>
            <b>
              <T message="Прекращено" />
            </b>{" "}
            <T message="(dismissal). Показатель описывает случаи, когда судебное производство было прекращено. Категории нет в таблице, дана детализация по основаниям прекращения:" />
            <ol>
              <li>
                <b>
                  <T message="Реабилитирующие основания." />
                </b>{" "}
                <T message="Категории нет в таблице, дана детализация по видам:" />
                <ol type="a">
                  <li>
                    <b>
                      <T message="Прекращено за отсутствием события, состава, непричастностью к преступлению" />
                    </b>{" "}
                    <T message="(dismissalAbsenceOfEvent)." />
                  </li>
                  <li>
                    <b>
                      <T message="Обстоятельства, исключающие преступность деяния." />
                    </b>{" "}
                    <T message="Мы не знаем, интерпретирует ли Судебный департамент эти данные как детализацию прекращения дела по реабилитирующим обстоятельствам или как дополнительную характеристику по основному составу, поэтому включили эту категорию в оба раздела." />
                    <FaqPageTooltip
                      tip={t(
                        "раздел «Основной состав», пункт III.1.b. и раздел «Дополнительные характеристики по основному составу», пункт 7."
                      )}
                    />
                    <T message="Категории нет в таблице, дана детализация по видам:" />
                    <ul>
                      <li>
                        <T message="Обстоятельства, исключающие преступность деяния:" />{" "}
                        <b>
                          <T message="необходимая оборона" />
                        </b>{" "}
                        <T message="(noCrimeSelf-defence)" />
                      </li>
                      <li>
                        <T message="Обстоятельства, исключающие преступность деяния:" />{" "}
                        <b>
                          <T message="крайняя необходимость" />
                        </b>{" "}
                        <T message="(noCrimeNecessity)" />
                      </li>
                      <li>
                        <b>
                          <T message="Обстоятельства, исключающие преступность, предусмотренные статьями 38, 40-42 УК РФ" />
                        </b>{" "}
                        <T message="(noCrimeOther)" />
                      </li>
                    </ul>
                  </li>
                </ol>
              </li>
              <li>
                <b>
                  <T message="Нереабилитирующие основания." />
                </b>{" "}
                <T message="Категории нет в таблице, дана детализация по видам:" />
                <ol type="a">
                  <li>
                    <b>
                      <T message="Прекращено по амнистии" />
                    </b>{" "}
                    <T message="(dismissalAmnesty)" />
                  </li>
                  <li>
                    <b>
                      <T message="Прекращено за примирением с потерпевшим" />
                    </b>{" "}
                    <T message="(dismissalReconciliation)" />
                  </li>
                  <li>
                    <b>
                      <T message="Прекращено в связи с деятельным раскаянием" />
                    </b>{" "}
                    <T message="(dismissalRepentance) и" />{" "}
                    <b>
                      <T message="прекращено по другим основаниям: на основании примечаний к статьям УК РФ (в связи с деятельным раскаянием ч. 2 ст. 28 УПК РФ)" />
                    </b>{" "}
                    <T message="(dismissalRepentance2). Мы не знаем, интерпретирует ли Судебный департамент эти данные как один или разные показатели. Это может быть детализация или наслоение данных" />
                  </li>
                  <li>
                    <b>
                      <T message="Прекращено с назначением судебного штрафа" />
                    </b>{" "}
                    <T message="(dismissalCourtFinе):" />
                    <ul>
                      <li>
                        <T message="Судебный штраф: количество осужденных по размеру штрафа" />{" "}
                        <b>
                          <T message="до 5 тыс. рублей" />
                        </b>{" "}
                        <T message="(dismissalCourtFine5)" />
                      </li>
                      <li>
                        <T message="Судебный штраф: количество осужденных по размеру штрафа" />{" "}
                        <b>
                          <T message="свыше 5 тыс. до 25 тыс. рублей" />
                        </b>{" "}
                        <T message="(dismissalCourtFine5_25)" />
                      </li>
                      <li>
                        <T message="Судебный штраф: количество осужденных по размеру штрафа" />{" "}
                        <b>
                          <T message="свыше 25 тыс. до 100 тыс. рублей" />
                        </b>{" "}
                        <T message="(dismissalCourtFine25_100)" />
                      </li>
                      <li>
                        <T message="Судебный штраф: количество осужденных по размеру штрафа" />{" "}
                        <b>
                          <T message="свыше 100 тыс. рублей" />
                        </b>{" "}
                        <T message="(dismissalCourtFine100)" />
                      </li>
                    </ul>
                  </li>
                </ol>
              </li>
              <li>
                <b>
                  <T message="Прекращено по другим основаниям" />
                </b>{" "}
                <T message="(dismissalOther). Мы не знаем, какие именно основания входят в эту категорию. Здесь могут быть некоторые из реабилитирующих и нереабилитирующих оснований." />
              </li>
            </ol>
          </li>
          <li>
            <b>
              <T message="Принудительные меры к невменяемым" />
            </b>{" "}
            <T message="(coerciveMeasures). Показатель описывает случаи, когда к человеку были применены принудительные меры медицинского характера." />
          </li>
          <li>
            <b>
              <T message="Освобождение от наказания" />
            </b>{" "}
            <T message="(exemption). Мы не знаем, является ли эта категория в статистике Судебного департамента одним из исходов дела, наряду с обвинением и оправданием, или дополнительной характеристикой тех случаев, когда человека осудили (всего осуждено (totalConvicted)), поэтому мы включили её в оба раздела." />
            <FaqPageTooltip
              tip={t(
                "Раздел «Основной состав», пункт V и раздел «Дополнительные характеристики по основному составу», пункт V."
              )}
            />
            <T message="Категории нет в таблице, дана детализация по видам:" />
            <ol>
              <li>
                <T message="Освобождение от наказания" />{" "}
                <b>
                  <T message="по амнистии" />
                </b>{" "}
                <T message="(exemptionAmnesty)" />
              </li>
              <li>
                <T message="Освобождение от наказания" />{" "}
                <b>
                  <T message="по другим основаниям: лишение свободы" />
                </b>{" "}
                <T message="(exemptionFromImprisonment)" />
              </li>
              <li>
                <T message="Освобождение от наказания" />{" "}
                <b>
                  <T message="по другим основаниям: от иных мер или наказание не назначалось" />
                </b>{" "}
                <T message="(examptionOther)" />
              </li>
            </ol>
          </li>
        </ol>
      </Typography>
      <Typography isUpperCased>
        <b>
          <T message="Дополнительные характеристики по основному составу" />
        </b>
      </Typography>
      <Typography>
        <ol type="I" className={cn(classes.ulWithAdditionalMargin)}>
          <li>
            <b>
              <T message="Коррупционный мотив" />
            </b>{" "}
            <T message="(corruption). Дополнительная характеристика мотивов для тех, кого признали виновными («Всего осуждено» (totalConvicted)), данные есть за 2010-2012 годы включительно." />
          </li>
          <li>
            <b>
              <T message="Наказание назначено ниже низшего предела лишение свободы" />
            </b>{" "}
            <T message="(primaryImprisonmentUnderLowerLimit). Дополнительная характеристика для тех, кому назначили лишение свободы ((primaryImprisonment) — по всем детализациям)." />
          </li>
          <li>
            <b>
              <T message="Преступление не является оконченным" />
            </b>{" "}
            <T message="(приготовление, покушение) (unfinishedOffence). Дополнительная характеристика по категории «Всего осуждено» (totalConvicted)." />
          </li>
          <li>
            <b>
              <T message="Общая сумма штрафов" />
            </b>{" "}
            <T message="(primaryFineSum). Дополнительная характеристика совокупности наказаний в виде штрафа в качестве основного наказания." />
          </li>
          <li>
            <b>
              <T message="Судебный штраф: общая сумма" />
            </b>{" "}
            <T message="(dismissalCourtFineSum). Дополнительная характеристика одного из видов прекращения судебного производства. Этот штраф не следует складывать со штрафом как видом наказания, основным или дополнительным." />
          </li>
          <li>
            <b>
              <T message="Освобождение от наказания" />
            </b>{" "}
            <T message="(exemption). Мы не знаем, является ли эта категория в статистике Судебного департамента одним из исходов дела, наряду с обвинением и оправданием, или дополнительной характеристикой тех случаев, когда человека осудили (всего осуждено (totalConvicted)), поэтому мы включили её в оба раздела." />
            <FaqPageTooltip
              tip={t(
                "Раздел «Основной состав», пункт V и раздел «Дополнительные характеристики по основному составу», пункт V."
              )}
            />
            <T message="Категории нет в таблице, дана детализация по видам:" />
            <ol>
              <li>
                <T message="Освобождение от наказания" />{" "}
                <b>
                  <T message="по амнистии" />
                </b>{" "}
                <T message="(exemptionAmnesty)" />
              </li>
              <li>
                <T message="Освобождение от наказания" />{" "}
                <b>
                  <T message="по другим основаниям: лишение свободы" />
                </b>{" "}
                <T message="(exemptionFromImprisonment)" />
              </li>
              <li>
                <T message="Освобождение от наказания" />{" "}
                <b>
                  <T message="по другим основаниям: от иных мер или наказание не назначалось" />
                </b>{" "}
                <T message="(examptionOther)" />
              </li>
            </ol>
          </li>
          <li>
            <b>
              <T message="Дополнительные наказания." />
            </b>{" "}
            <T message="Дополнительная характеристика категории «Всего осуждено» (totalConvicted), показывает случаи, когда к основному наказанию суд назначает дополнительное за тот же состав преступления. Категории нет в таблице, дана детализация по видам:" />
            <ol>
              <li>
                <T message="Дополнительное наказание:" />{" "}
                <b>
                  <T message="лишение права занимать определенные должности или заниматься определенной деятельностью" />
                </b>{" "}
                <T message="(addDisqualification)" />
              </li>
              <li>
                <T message="Дополнительное наказание:" />{" "}
                <b>
                  <T message="штраф" />
                </b>{" "}
                <T message="(addFine)" />
                <ol type="a">
                  <li>
                    <T message="Штраф: количество осужденных по размеру штрафа" />{" "}
                    <b>
                      <T message="до 5 тыс. рублей" />
                    </b>{" "}
                    <T message="(addFine5)" />
                  </li>
                  <li>
                    <T message="Штраф: количество осужденных по размеру штрафа" />{" "}
                    <b>
                      <T message="свыше 5 тыс. до 25 тыс. рублей" />
                    </b>{" "}
                    <T message="(addFine5_25)" />
                  </li>
                  <li>
                    <T message="Штраф: количество осужденных по размеру штрафа" />{" "}
                    <b>
                      <T message="свыше 25 тыс. до 500 тыс. рублей" />
                    </b>{" "}
                    <T message="(addFine25_500)" />
                    <ul>
                      <li>
                        <T message="Штраф: количество осужденных по размеру штрафа" />{" "}
                        <b>
                          <T message="свыше 25 тыс. до 100 тыс. рублей" />
                        </b>{" "}
                        <T message="(addFine25_100)" />
                      </li>
                      <li>
                        <T message="Штраф: количество осужденных по размеру штрафа" />{" "}
                        <b>
                          <T message="свыше 100 тыс. до 300 тыс. рублей" />
                        </b>{" "}
                        <T message="(addFine100_300)" />
                      </li>
                      <li>
                        <T message="Штраф: количество осужденных по размеру штрафа" />{" "}
                        <b>
                          <T message="свыше 300 тыс. до 500 тыс. рублей" />
                        </b>{" "}
                        <T message="(addFine300_500)" />
                      </li>
                    </ul>
                  </li>
                  <li>
                    <T message="Штраф: количество осужденных по размеру штрафа" />{" "}
                    <b>
                      <T message="свыше 500 тыс. до 1 млн рублей" />
                    </b>{" "}
                    <T message="(addFine500_1M)" />
                  </li>
                  <li>
                    <T message="Штраф: количество осужденных по размеру штрафа" />{" "}
                    <b>
                      <T message="свыше 1 млн рублей" />
                    </b>{" "}
                    <T message="(addFine1M)" />
                  </li>
                  <li>
                    <b>
                      <T message="Штраф (дополнительное наказание): общая сумма" />
                    </b>{" "}
                    <T message="(addFineSum). Дополнительная характеристика показателя по штрафам в качестве дополнительного наказания. Может складываться с общей суммой штрафа как основного наказания." />
                  </li>
                </ol>
              </li>
              <li>
                <T message="Дополнительное наказание:" />{" "}
                <b>
                  <T message="лишение специального, воинского или почетного звания, классного чина и государственных наград" />
                </b>{" "}
                <T message="(addTitlesWithdraw)" />
              </li>
              <li>
                <T message="Дополнительное наказание:" />{" "}
                <b>
                  <T message="ограничение свободы" />
                </b>{" "}
                <T message="(addRestrain)" />
              </li>
            </ol>
          </li>
          <li>
            <b>
              <T message="Обстоятельства, исключающие преступность деяния." />
            </b>{" "}
            <T message="Мы не знаем, интерпретирует ли Судебный департамент эти данные как детализацию прекращения дел по реабилитирующим обстоятельствам или как дополнительную характеристику по основному составу, поэтому включили эту категорию в оба раздела." />
            <FaqPageTooltip
              tip={t(
                "раздел «Основной состав», пункт III.1.a. и раздел «Дополнительные характеристики по основному составу», пункт VII."
              )}
            />
            <T message="Категории нет в таблице, дана детализация по видам:" />
            <ol type="a">
              <li>
                <T message="Обстоятельства, исключающие преступность деяния:" />{" "}
                <b>
                  <T message="необходимая оборона" />
                </b>{" "}
                <T message="(noCrimeSelf-defence)" />
              </li>
              <li>
                <T message="Обстоятельства, исключающие преступность деяния:" />{" "}
                <b>
                  <T message="крайняя необходимость" />
                </b>{" "}
                <T message="(noCrimeNecessity)" />
              </li>
              <li>
                <b>
                  <T message="Обстоятельства, исключающие преступность, предусмотренные статьями 38, 40 - 42 УК РФ" />
                </b>{" "}
                <T message="(noCrimeOther)" />
              </li>
            </ol>
          </li>
        </ol>
      </Typography>
      <Typography isUpperCased>
        <b>
          <T message="Дополнительные характеристики по основному составу" />
        </b>
      </Typography>
      <Typography>
        <ol type="I" className={cn(classes.ulWithAdditionalMargin)}>
          <li>
            <b>
              <T message="Осуждено: по числу лиц" />
            </b>{" "}
            <T message="(addTotalPersons) и" />{" "}
            <b>
              <T message="по количеству составов преступлений" />
            </b>{" "}
            <T message="(addTotalOffences)" />
          </li>
          <li>
            <b>
              <T message="Оправдано: по числу лиц" />
            </b>{" "}
            <T message="(addAcquittalPersons) и" />{" "}
            <b>
              <T message="по количеству составов преступлений" />
            </b>{" "}
            <T message="(addAcquittalOffences)" />
          </li>
          <li>
            <b>
              <T message="Прекращено." />
            </b>{" "}
            <T message="Мы не знаем, какие именно основания включены в эту категорию. Это могут быть некоторые из реабилитирующих и нереабилитирующих оснований. Категории нет в таблице, дана детализация по основаниям прекращения:" />
            <ol>
              <li>
                <b>
                  <T message="Прекращено: по числу лиц" />
                </b>{" "}
                <T message="(addAcquittalOffences) и" />{" "}
                <b>
                  <T message="по количеству составов преступлений" />
                </b>{" "}
                <T message="(addDismissalOffences)" />
              </li>
              <li>
                <b>
                  <T message="Прекращено по другим основаниям: по числу лиц" />
                </b>{" "}
                <T message="(addDismissalOtherPersons) и" />{" "}
                <b>
                  <T message="по количеству составов преступлений" />
                </b>{" "}
                <T message="(addDismissalOtherOffences)." />
              </li>
            </ol>
          </li>
          <li>
            <b>
              <T message="Признаны невменяемыми: по числу лиц" />
            </b>{" "}
            <T message="(addUnfitToPleadPersons) и" />{" "}
            <b>
              <T message="по количеству составов преступлений" />
            </b>{" "}
            <T message="(addUnfitToPleadOffences)." />
          </li>
        </ol>
      </Typography>
      <Typography isUpperCased>
        <b>Поля выгрузки</b>
      </Typography>
      <Table
        isNotPaddedLeft
        hideEmbed
        isEqualWidth
        isNotMarginTop
        tables={tables}
      />
    </>
  );
};

export default FaqPageUploadFieldsNParameterTree;
